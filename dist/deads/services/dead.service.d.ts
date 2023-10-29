import { Dead } from 'src/typeorm';
import { Repository } from 'typeorm';
import { DeadDto } from 'src/deads/dto/dead.dto';
export declare class DeadsService {
    private readonly deadRepository;
    constructor(deadRepository: Repository<Dead>);
    createDead(createDeadDto: DeadDto): Promise<Dead>;
    getDeads(): Promise<Dead[]>;
    findDeadById(id: number): Promise<Dead>;
}
