import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Maratona } from './app.entity.maratona';
import { MaratonaController } from './maratona/maratona.controller';
import { MaratonaService } from './maratona/maratona.service';
import { MaratonaModule } from './maratona/maratona.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Maratona],
    }),
    MaratonaModule
  ],
  controllers: [AppController, MaratonaController],
  providers: [AppService, MaratonaService],
})
export class AppModule { }
