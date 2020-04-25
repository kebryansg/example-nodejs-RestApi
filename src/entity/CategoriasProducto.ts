import {Column, Entity, Index, OneToMany, PrimaryGeneratedColumn,} from "typeorm";
import {Productos} from "./Productos";

@Index("PK_Categorias", ["idCategoriaProducto"], { unique: true })
@Entity("CategoriasProducto", { schema: "dbo" })
export class CategoriasProducto {
  @PrimaryGeneratedColumn({ type: "int", name: "IdCategoriaProducto" })
  idCategoriaProducto: number;

  @Column("varchar", { name: "Nombre", nullable: true, length: 150 })
  nombre: string | null;

  @Column("bit", { name: "Estado", nullable: true })
  estado: boolean | null;

  @Column("varchar", { name: "slug", nullable: true, length: 50 })
  slug: string | null;

  @OneToMany(() => Productos, (productos) => productos.idCategoriaProducto)
  productos: Productos[];
}
