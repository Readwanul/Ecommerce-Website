import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    filename: string;

    @Column()
    mimetype: string;

    @Column({ type: "bytea" }) // Ensure your DB supports this
    photo: Buffer;
}
