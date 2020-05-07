import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Desafio nª 2 Maratona Full Cycle 2.0';
  }
}
