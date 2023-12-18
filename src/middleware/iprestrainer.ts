import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import * as requestIp from 'request-ip';

@Injectable()
export class IpLimiterMiddleware implements NestMiddleware {
  private rateLimiter = new RateLimiterMemory({
    points: 10, // Number of points
    duration: 10, // Per second
  });

  async use(req: Request, res: Response, next: NextFunction) {
    const ip = requestIp.getClientIp(req) || 'unknown';

    try {
      // Check if the IP has reached the limit
      await this.rateLimiter.consume(ip);
      next();
    } catch (e) {
      // IP has reached the limit, return HTTP 429 (Too Many Requests)
      res.status(HttpStatus.TOO_MANY_REQUESTS).json({ message: 'Too Many Requests' });
    }
  }
}
