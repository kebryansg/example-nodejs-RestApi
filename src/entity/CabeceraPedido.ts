import {Column, Entity, Index, OneToMany, PrimaryGeneratedColumn,} from "typeorm";
import {DetallePedido} from "./DetallePedido";

@Index("PK_CabeceraPedido", ["idCabeceraPedido"], { unique: true })
@Entity("CabeceraPedido", { schema: "dbo" })
export class CabeceraPedido {
  @PrimaryGeneratedColumn({ type: "int", name: "IdCabeceraPedido" })
  idCabeceraPedido: number;

  @Column("int", { name: "TipoId", nullable: true })
  tipoId: number | null;

  @Column("varchar", { name: "Identificacion", nullable: true, length: 13 })
  identificacion: string | null;

  @Column("varchar", { name: "Nombres", nullable: true, length: 300 })
  nombres: string | null;

  @Column("varchar", { name: "Ciudad", nullable: true, length: 100 })
  ciudad: string | null;

  @Column("varchar", { name: "Direccion", nullable: true, length: 350 })
  direccion: string | null;

  @Column("varchar", { name: "Correo", nullable: true, length: 100 })
  correo: string | null;

  @Column("varchar", { name: "Telefono", nullable: true, length: 15 })
  telefono: string | null;

  @Column("decimal", {
    name: "Cantidad",
    nullable: true,
    precision: 18,
    scale: 5,
  })
  cantidad: number | null;

  @Column("decimal", { name: "Total", nullable: true, precision: 18, scale: 5 })
  total: number | null;

  @Column("varchar", { name: "GUI", nullable: true, length: 150 })
  gui: string | null;

  @Column("varchar", { name: "Estado", nullable: true, length: 50 })
  estado: string | null;

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

  @Column("bit", { name: "IsEnviadoCorreoQR", nullable: true })
  isEnviadoCorreoQr: boolean | null;

  @Column("datetime", { name: "FechaHoraEnviadoQR", nullable: true })
  fechaHoraEnviadoQr: Date | null;

  @OneToMany(
    () => DetallePedido,
    (detallePedido) => detallePedido.idCabeceraPedido
  )
  detallePedidos: DetallePedido[];
}
