import { DeadDto } from 'src/deads/dto/dead.dto';
import { DeadsService } from 'src/deads/services/dead.service';
export declare class DeadsController {
    private readonly deadService;
    constructor(deadService: DeadsService);
    getDeads(): Promise<import("../../typeorm").Dead[]>;
    findDeadById(id: number): Promise<import("../../typeorm").Dead>;
    createPosts(createDeadDto: DeadDto): Promise<import("../../typeorm").Dead>;
}
