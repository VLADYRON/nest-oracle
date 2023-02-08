import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"personas"})
export class Persona {

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique:true})
    nombre: string

    @Column()
    apellido: string
}