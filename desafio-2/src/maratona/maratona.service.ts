import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Maratona } from 'src/app.entity.maratona';
import { Repository } from 'typeorm';

@Injectable()
export class MaratonaService {

    constructor(
        @InjectRepository(Maratona)
        private maratonaRepository: Repository<Maratona>,
    ) { }

    async findAll(): Promise<Maratona[]> {
        return await this.maratonaRepository.find();
    }

    public async create(obj: Maratona) {
        let maratona = new Maratona();
        maratona.aula = obj.aula;

        return await this.maratonaRepository.save(maratona);
    }
}
