import {Column, Entity, Index, OneToMany, PrimaryGeneratedColumn,} from "typeorm";
import {Comercios} from "./Comercios";

@Index("PK_EstadosComercios", ["idEstadoComercio"], { unique: true })
@Entity("EstadosComercios", { schema: "dbo" })
export class EstadosComercios {
  @PrimaryGeneratedColumn({ type: "int", name: "IdEstadoComercio" })
  idEstadoComercio: number;

  @Column("varchar", { name: "EstadoComercio", nullable: true, length: 250 })
  estadoComercio: string | null;

  @Column("bit", { name: "Estado", nullable: true })
  estado: boolean | null;

  @OneToMany(() => Comercios, (comercios) => comercios.estadoComercio)
  comercios: Comercios[];
}
