import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class IpLimiterMiddleware implements NestMiddleware {
    private rateLimiter;
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
