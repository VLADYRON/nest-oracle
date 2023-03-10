import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaController } from './persona.controller';
import { Persona } from './persona.entity';
import { PersonaService } from './persona.service';

@Module({
  imports: [TypeOrmModule.forFeature([Persona]),],
  controllers: [PersonaController],
  providers: [PersonaService]
})
export class PersonaModule { }
