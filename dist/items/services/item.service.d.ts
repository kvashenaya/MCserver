import { Item } from 'src/typeorm';
import { Repository } from 'typeorm';
import { ItemDto } from 'src/items/dto/item.dto';
export declare class ItemsService {
    private readonly itemRepository;
    constructor(itemRepository: Repository<Item>);
    getItems(): Promise<Item[]>;
    getItemsStructured(): Promise<Record<string, {
        id: number;
        item_id: number;
        item_text: number;
        comment: string;
        duration: string;
        customer: string;
    }[]>>;
    createItem(createItemDto: ItemDto): Promise<Item>;
}
