import {Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn,} from "typeorm";
import {Productos} from "./Productos";
import {CabeceraPedido} from "./CabeceraPedido";

@Index("PK_DetallePedido", ["idDetalle"], { unique: true })
@Entity("DetallePedido", { schema: "dbo" })
export class DetallePedido {
  @PrimaryGeneratedColumn({ type: "int", name: "IdDetalle" })
  idDetalle: number;

  @Column("decimal", {
    name: "Cantidad",
    nullable: true,
    precision: 18,
    scale: 5,
  })
  cantidad: number | null;

  @Column("decimal", {
    name: "Precio",
    nullable: true,
    precision: 18,
    scale: 5,
  })
  precio: number | null;

  @Column("decimal", { name: "Total", nullable: true, precision: 18, scale: 5 })
  total: number | null;

  @Column("varchar", { name: "Nombre", nullable: true, length: 500 })
  nombre: string | null;

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

  @ManyToOne(() => Productos, (productos) => productos.detallePedidos)
  @JoinColumn([{ name: "IdProducto", referencedColumnName: "idProducto" }])
  idProducto: Productos;

  @ManyToOne(
    () => CabeceraPedido,
    (cabeceraPedido) => cabeceraPedido.detallePedidos
  )
  @JoinColumn([
    { name: "IdCabeceraPedido", referencedColumnName: "idCabeceraPedido" },
  ])
  idCabeceraPedido: CabeceraPedido;
}
