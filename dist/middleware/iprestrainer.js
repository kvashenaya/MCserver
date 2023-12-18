"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpLimiterMiddleware = void 0;
const common_1 = require("@nestjs/common");
const rate_limiter_flexible_1 = require("rate-limiter-flexible");
const requestIp = require("request-ip");
let IpLimiterMiddleware = class IpLimiterMiddleware {
    constructor() {
        this.rateLimiter = new rate_limiter_flexible_1.RateLimiterMemory({
            points: 10,
            duration: 10,
        });
    }
    async use(req, res, next) {
        const ip = requestIp.getClientIp(req) || 'unknown';
        try {
            await this.rateLimiter.consume(ip);
            next();
        }
        catch (e) {
            res.status(common_1.HttpStatus.TOO_MANY_REQUESTS).json({ message: 'Too Many Requests' });
        }
    }
};
IpLimiterMiddleware = __decorate([
    (0, common_1.Injectable)()
], IpLimiterMiddleware);
exports.IpLimiterMiddleware = IpLimiterMiddleware;
//# sourceMappingURL=iprestrainer.js.map