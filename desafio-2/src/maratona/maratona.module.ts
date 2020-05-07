import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maratona } from 'src/app.entity.maratona';
import { MaratonaService } from './maratona.service';
import { MaratonaController } from './maratona.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Maratona]),],
    providers: [MaratonaService],
    controllers: [MaratonaController],
    exports: [TypeOrmModule]
})
export class MaratonaModule { }
