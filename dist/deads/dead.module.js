"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeadsModule = void 0;
const common_1 = require("@nestjs/common");
const dead_controller_1 = require("./controllers/dead.controller");
const dead_service_1 = require("./services/dead.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../typeorm");
let DeadsModule = class DeadsModule {
};
DeadsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([typeorm_2.Dead])],
        controllers: [dead_controller_1.DeadsController],
        providers: [dead_service_1.DeadsService]
    })
], DeadsModule);
exports.DeadsModule = DeadsModule;
//# sourceMappingURL=dead.module.js.map