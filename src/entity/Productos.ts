import {Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn,} from "typeorm";
import {DetallePedido} from "./DetallePedido";
import {ImagenesProductos} from "./ImagenesProductos";
import {CategoriasProducto} from "./CategoriasProducto";
import {Comercios} from "./Comercios";

@Index("PK_Productos", ["idProducto"], { unique: true })
@Entity("Productos", { schema: "dbo" })
export class Productos {
  @PrimaryGeneratedColumn({ type: "int", name: "IdProducto" })
  idProducto: number;

  @Column("int", { name: "IdProductoErp", nullable: true })
  idProductoErp: number | null;

  @Column("varchar", { name: "NombreProducto", nullable: true, length: 250 })
  nombreProducto: string | null;

  @Column("varchar", { name: "Descripcion", nullable: true, length: 300 })
  descripcion: string | null;

  @Column("decimal", {
    name: "Precio",
    nullable: true,
    precision: 18,
    scale: 5,
  })
  precio: number | null;

  @Column("decimal", {
    name: "PorcentajeDescuento",
    nullable: true,
    precision: 18,
    scale: 5,
  })
  porcentajeDescuento: number | null;

  @Column("decimal", {
    name: "PrecioFinal",
    nullable: true,
    precision: 18,
    scale: 5,
  })
  precioFinal: number | null;

  @Column("bit", { name: "Estado", nullable: true })
  estado: boolean | null;

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

  @OneToMany(() => DetallePedido, (detallePedido) => detallePedido.idProducto)
  detallePedidos: DetallePedido[];

  @OneToMany(
    () => ImagenesProductos,
    (imagenesProductos) => imagenesProductos.idProducto
  )
  imagenesProductos: ImagenesProductos[];

  @ManyToOne(
    () => CategoriasProducto,
    (categoriasProducto) => categoriasProducto.productos
  )
  @JoinColumn([
    {
      name: "IdCategoriaProducto",
      referencedColumnName: "idCategoriaProducto",
    },
  ])
  idCategoriaProducto: CategoriasProducto;

  @ManyToOne(() => Comercios, (comercios) => comercios.productos)
  @JoinColumn([{ name: "IdComercio", referencedColumnName: "idComercio" }])
  idComercio: Comercios;
}
