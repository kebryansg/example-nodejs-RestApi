import {Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn,} from "typeorm";
import {Productos} from "./Productos";

@Index("PK_ImagenesProductos", ["idImagenProducto"], { unique: true })
@Entity("ImagenesProductos", { schema: "dbo" })
export class ImagenesProductos {
  @PrimaryGeneratedColumn({ type: "int", name: "IdImagenProducto" })
  idImagenProducto: number;

  @Column("varchar", { name: "UrlImagenProducto", nullable: true, length: 500 })
  urlImagenProducto: string | null;

  @Column("bit", { name: "Estado", nullable: true })
  estado: boolean | null;

  @Column("bit", { name: "IsImagenPrincipal", nullable: true })
  isImagenPrincipal: boolean | null;

  @Column("nvarchar", { name: "CreadoPor", nullable: true, length: 32 })
  creadoPor: string | null;

  @Column("datetime", { name: "FechaCreacion", nullable: true })
  fechaCreacion: Date | null;

  @Column("nvarchar", { name: "EstacionCreacion", nullable: true, length: 32 })
  estacionCreacion: string | null;

  @Column("datetime", { name: "UltimaModificacion", nullable: true })
  ultimaModificacion: Date | null;

  @Column("nvarchar", { name: "ModificadoPor", nullable: true, length: 32 })
  modificadoPor: string | null;

  @Column("nvarchar", {
    name: "EstacionModificacion",
    nullable: true,
    length: 32,
  })
  estacionModificacion: string | null;

  @ManyToOne(() => Productos, (productos) => productos.imagenesProductos)
  @JoinColumn([{ name: "IdProducto", referencedColumnName: "idProducto" }])
  idProducto: Productos;
}
