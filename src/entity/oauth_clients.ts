import {
    Column, CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn, UpdateDateColumn,
} from "typeorm";

@Entity("oauth_clients")
export class oauth_clients {

    @PrimaryGeneratedColumn({
        type: "int",
    })
    ID: number;

    @Column("varchar", {
        nullable: false,
    })
    Name: string;

    @Column("varchar", {
        nullable: false,
        length: 100,
    })
    Secret: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
