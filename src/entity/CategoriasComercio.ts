import {Column, Entity, Index, OneToMany, PrimaryGeneratedColumn,} from "typeorm";
import {Comercios} from "./Comercios";

@Index("PK_CategoriasComercio", ["idCategoriaComercio"], { unique: true })
@Entity("CategoriasComercio", { schema: "dbo" })
export class CategoriasComercio {
  @PrimaryGeneratedColumn({ type: "int", name: "IdCategoriaComercio" })
  idCategoriaComercio: number;

  @Column("varchar", { name: "Nombre", nullable: true, length: 300 })
  nombre: string | null;

  @Column("bit", { name: "Estado", nullable: true })
  estado: boolean | null;

  @OneToMany(() => Comercios, (comercios) => comercios.idCategoriaComercio)
  comercios: Comercios[];
}
