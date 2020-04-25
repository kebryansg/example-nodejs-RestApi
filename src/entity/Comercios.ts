import {Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn,} from "typeorm";
import {CategoriasComercio} from "./CategoriasComercio";
import {EstadosComercios} from "./EstadosComercios";
import {Productos} from "./Productos";

@Index("PK_Comercios", ["idComercio"], { unique: true })
@Entity("Comercios", { schema: "dbo" })
export class Comercios {
  @PrimaryGeneratedColumn({ type: "int", name: "IdComercio" })
  idComercio: number;

  @Column("varchar", { name: "RUC", nullable: true, length: 13 })
  ruc: string | null;

  @Column("varchar", { name: "RazonSocial", nullable: true, length: 150 })
  razonSocial: string | null;

  @Column("varchar", { name: "NombreComercio", nullable: true, length: 150 })
  nombreComercio: string | null;

  @Column("varchar", { name: "TelefonoCelular", nullable: true, length: 10 })
  telefonoCelular: string | null;

  @Column("varchar", { name: "CorreoElectronico", nullable: true, length: 150 })
  correoElectronico: string | null;

  @Column("varchar", { name: "UrlFotoComercio", nullable: true, length: 300 })
  urlFotoComercio: string | null;

  @Column("varchar", {
    name: "UrlPlanillaServiciosBasicos",
    nullable: true,
    length: 300,
  })
  urlPlanillaServiciosBasicos: string | null;

  @Column("varchar", { name: "HoraApertura", nullable: true, length: 20 })
  horaApertura: string | null;

  @Column("varchar", { name: "HoraCierre", nullable: true, length: 20 })
  horaCierre: string | null;

  @Column("varchar", { name: "Latitud", nullable: true, length: 100 })
  latitud: string | null;

  @Column("varchar", { name: "Longitud", nullable: true, length: 100 })
  longitud: string | null;

  @Column("varchar", { name: "DirecionComercio", nullable: true, length: 300 })
  direcionComercio: string | null;

  @Column("varchar", {
    name: "ReferenciaComercio",
    nullable: true,
    length: 300,
  })
  referenciaComercio: string | null;

  @Column("varchar", { name: "UrlPaginaComercio", nullable: true, length: 300 })
  urlPaginaComercio: string | null;

  @Column("varchar", {
    name: "DescripcionComercio",
    nullable: true,
    length: 300,
  })
  descripcionComercio: string | null;

  @Column("int", { name: "CodigoSocio", nullable: true })
  codigoSocio: number | null;

  @Column("int", { name: "EstadoSocio", nullable: true })
  estadoSocio: number | null;

  @Column("bit", { name: "IsEnviadoEmailNotificacion", nullable: true })
  isEnviadoEmailNotificacion: boolean | null;

  @Column("datetime", {
    name: "FechaHoraEnviadoEmailNotificacion",
    nullable: true,
  })
  fechaHoraEnviadoEmailNotificacion: Date | null;

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

  @Column("varchar", { name: "Notas", nullable: true, length: 500 })
  notas: string | null;

  @Column("bit", { name: "IsEnviadoEmailCreacionUsuario", nullable: true })
  isEnviadoEmailCreacionUsuario: boolean | null;

  @Column("datetime", {
    name: "FechaHoraEnviadoEmailCreacionUsuario",
    nullable: true,
  })
  fechaHoraEnviadoEmailCreacionUsuario: Date | null;

  @Column("bit", { name: "IsAprobacionTemporal", nullable: true })
  isAprobacionTemporal: boolean | null;

  @Column("datetime", { name: "FechaHoraAprobacionTemporal", nullable: true })
  fechaHoraAprobacionTemporal: Date | null;

  @ManyToOne(
    () => CategoriasComercio,
    (categoriasComercio) => categoriasComercio.comercios
  )
  @JoinColumn([
    {
      name: "IdCategoriaComercio",
      referencedColumnName: "idCategoriaComercio",
    },
  ])
  idCategoriaComercio: CategoriasComercio;

  @ManyToOne(
    () => EstadosComercios,
    (estadosComercios) => estadosComercios.comercios
  )
  @JoinColumn([
    { name: "EstadoComercio", referencedColumnName: "idEstadoComercio" },
  ])
  estadoComercio: EstadosComercios;

  @OneToMany(() => Productos, (productos) => productos.idComercio)
  productos: Productos[];
}
