import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Users {

    @PrimaryColumn('int', {
        generated: 'increment'
    })
    ID: number;

    @Column()
    Username: string;

    @Column('longtext', {select: false})
    Pass: string;

    @Column({
        length: 3,
        default: () => "'ACT'"
    })
    Estado: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}