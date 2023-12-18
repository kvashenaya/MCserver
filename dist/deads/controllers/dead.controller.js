"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeadsController = void 0;
const common_1 = require("@nestjs/common");
const dead_dto_1 = require("../dto/dead.dto");
const dead_service_1 = require("../services/dead.service");
let DeadsController = class DeadsController {
    constructor(deadService) {
        this.deadService = deadService;
    }
    getDeads() {
        return this.deadService.getDeads();
    }
    findDeadById(id) {
        return this.deadService.findDeadById(id);
    }
    createPosts(createDeadDto) {
        return this.deadService.createDead(createDeadDto);
    }
    getItemsByDeadId(id) {
        return this.deadService.getItemsByDeadId(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeadsController.prototype, "getDeads", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeadsController.prototype, "findDeadById", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dead_dto_1.DeadDto]),
    __metadata("design:returntype", void 0)
], DeadsController.prototype, "createPosts", null);
__decorate([
    (0, common_1.Get)(':id/items'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeadsController.prototype, "getItemsByDeadId", null);
DeadsController = __decorate([
    (0, common_1.Controller)('deads'),
    __metadata("design:paramtypes", [dead_service_1.DeadsService])
], DeadsController);
exports.DeadsController = DeadsController;
//# sourceMappingURL=dead.controller.js.map