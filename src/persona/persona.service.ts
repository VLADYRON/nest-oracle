import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonaDto } from './persona.dto';
import { Persona } from './persona.entity';

@Injectable()
export class PersonaService {

    constructor(
        @InjectRepository(Persona)
        private readonly personaRepository: Repository<Persona>
    ) { }

    async all() {
        return await this.personaRepository.find();
    }

    async find(id: number) {
        return await this.personaRepository.findOneBy({id});
    }

    async save(persona: PersonaDto) {
        const newPersona = new Persona();
        newPersona.nombre = persona.nombre;
        newPersona.apellido = persona.apellido;
        return await this.personaRepository.save(newPersona);
    }

    async delete(id: number): Promise<void> {
         await this.personaRepository.delete(id);
    }

    async update(id: number, persona: PersonaDto): Promise<void> {
         await this.personaRepository.update(id, persona);
    }

}
