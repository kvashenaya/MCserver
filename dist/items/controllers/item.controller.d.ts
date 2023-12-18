import { ItemDto } from 'src/items/dto/item.dto';
import { ItemsService } from 'src/items/services/item.service';
export declare class ItemsController {
    private readonly itemService;
    constructor(itemService: ItemsService);
    getItems(): Promise<import("../../typeorm").Item[]>;
    getItemsStructured(): Promise<Record<string, {
        id: number;
        item_id: number;
        item_text: number;
        comment: string;
        duration: string;
        customer: string;
    }[]>>;
    createItems(createItemDto: ItemDto): Promise<import("../../typeorm").Item>;
}
