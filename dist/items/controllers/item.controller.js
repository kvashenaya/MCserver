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
exports.ItemsController = void 0;
const common_1 = require("@nestjs/common");
const item_dto_1 = require("../dto/item.dto");
const item_service_1 = require("../services/item.service");
let ItemsController = class ItemsController {
    constructor(itemService) {
        this.itemService = itemService;
    }
    getItems() {
        return this.itemService.getItems();
    }
    getItemsStructured() {
        return this.itemService.getItemsStructured();
    }
    createItems(createItemDto) {
        return this.itemService.createItem(createItemDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "getItems", null);
__decorate([
    (0, common_1.Get)('struct'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "getItemsStructured", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_dto_1.ItemDto]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "createItems", null);
ItemsController = __decorate([
    (0, common_1.Controller)('items'),
    __metadata("design:paramtypes", [item_service_1.ItemsService])
], ItemsController);
exports.ItemsController = ItemsController;
//# sourceMappingURL=item.controller.js.map