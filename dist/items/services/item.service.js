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
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../../typeorm");
const typeorm_3 = require("typeorm");
let ItemsService = class ItemsService {
    constructor(itemRepository) {
        this.itemRepository = itemRepository;
    }
    getItems() {
        return this.itemRepository.find();
    }
    async getItemsStructured() {
        const items = await this.itemRepository
            .createQueryBuilder('item')
            .select([
            'item.dead_id_item AS dead_id_item',
            'item.id AS id',
            'item.item_id AS item_id',
            'item.item_text AS item_text',
            'item.comment AS comment',
            'item.duration AS duration',
            'item.customer AS customer',
        ])
            .getRawMany();
        console.log('All Items:', items);
        const structuredResult = {};
        items.forEach((item) => {
            const { dead_id_item, id, item_id, item_text, comment, duration, customer } = item;
            if (!structuredResult[dead_id_item]) {
                structuredResult[dead_id_item] = [];
            }
            structuredResult[dead_id_item].push({ id, item_id, item_text, comment, duration, customer });
        });
        console.log('Structured Result:', structuredResult);
        return structuredResult;
    }
    createItem(createItemDto) {
        const newItem = this.itemRepository.create(createItemDto);
        return this.itemRepository.save(newItem);
    }
};
ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_2.Item)),
    __metadata("design:paramtypes", [typeorm_3.Repository])
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=item.service.js.map