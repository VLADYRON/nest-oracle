import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Persona } from './persona/persona.entity';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "oracle",
    "host": "localhost",
    "port": 1521,
    "username": "PCTX",
    "password": "corona",
    "sid": "xe",
    //"entities": ["dist/**/*.entity{.ts,.js}"],
    "entities": [Persona],
    "synchronize": true
  }),
  PersonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
