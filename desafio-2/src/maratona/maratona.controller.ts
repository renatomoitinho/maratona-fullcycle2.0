import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { MaratonaService } from './maratona.service';
import { Maratona } from 'src/app.entity.maratona';

@Controller('maratona')
export class MaratonaController {
    constructor(private serv: MaratonaService) { }

    @Get()
    @HttpCode(200)
    public async getAll() {
        return await this.serv.findAll();
    }

    @Post()
    @HttpCode(204)
    public async post(@Body() obj: Maratona) {
        return this.serv.create(obj);
    }
}
