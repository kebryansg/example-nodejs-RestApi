import {
    Column, CreateDateColumn, Entity,
    PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";

@Entity()
export class LogToken {

    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @Column()
    IDUsers: number;

    @Column()
    Token: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column("timestamp", {
        default: () => 'DATE_ADD(NOW(), INTERVAL 1 HOUR)',
    })
    expire_at: Date;

}