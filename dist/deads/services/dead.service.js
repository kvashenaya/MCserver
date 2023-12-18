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
exports.DeadsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../../typeorm");
const typeorm_3 = require("typeorm");
let DeadsService = class DeadsService {
    constructor(deadRepository) {
        this.deadRepository = deadRepository;
    }
    createDead(createDeadDto) {
        const newDead = this.deadRepository.create(createDeadDto);
        return this.deadRepository.save(newDead);
    }
    getDeads() {
        return this.deadRepository.find();
    }
    findDeadById(id) {
        return this.deadRepository.findOne({ where: { id } });
    }
    async getItemsByDeadId(id) {
        const groupedPeople = await this.deadRepository
            .createQueryBuilder('dead')
            .leftJoinAndSelect('dead.items', 'item')
            .select(['dead.id', 'item.dead_id_item', 'item.comment', 'item.duration', 'item.customer'])
            .getMany();
        console.log('Grouped People:', groupedPeople);
        const result = groupedPeople.filter((dead) => +dead.id === id);
        console.log('Filtered Result:', result);
        return result.length > 0 ? result[0] : null;
    }
};
DeadsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_2.Dead)),
    __metadata("design:paramtypes", [typeorm_3.Repository])
], DeadsService);
exports.DeadsService = DeadsService;
//# sourceMappingURL=dead.service.js.map