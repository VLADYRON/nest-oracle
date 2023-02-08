import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PersonaDto } from './persona.dto';
import { Persona } from './persona.entity';
import { PersonaService } from './persona.service';

@Controller('persona')
export class PersonaController {
    constructor(private personaService:PersonaService){}

    @Get()
    findAll(): Promise<Persona[]>{
        return this.personaService.all();
    }

    @Get(":id")
    findOne(@Param("id") id:number): Promise<Persona>{
        return this.personaService.find(id);
    }

    @Post()
    create(@Body() personaDTO:PersonaDto):Promise<Persona>{
        return this.personaService.save(personaDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
      return this.personaService.delete(id);
    }

    @Put(':id')
    update(@Body() personaDTO:PersonaDto, @Param('id') id: number): Promise<void> {
      return this.personaService.update(id, personaDTO);
    }  
}
