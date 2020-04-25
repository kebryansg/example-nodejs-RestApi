import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

@Index("PK_tSG_Usuarios", ["idUsuario"], { unique: true })
@Entity("tSG_Usuarios", { schema: "dbo" })
export class TSgUsuarios {
  @PrimaryGeneratedColumn({ type: "int", name: "IdUsuario" })
  idUsuario: number;

  @Column("int", { name: "IdComercio", nullable: true })
  idComercio: number | null;

  @Column("varchar", { name: "NombreUsuario", nullable: true, length: 20 })
  nombreUsuario: string | null;

  @Column("varchar", { name: "Contrasenia", nullable: true, length: 20 })
  contrasenia: string | null;

  @Column("varchar", { name: "Nombres", nullable: true, length: 50 })
  nombres: string | null;

  @Column("varchar", { name: "Apellidos", nullable: true, length: 50 })
  apellidos: string | null;

  @Column("varchar", { name: "NombresApellidos", length: 101 })
  nombresApellidos: string;

  @Column("varchar", { name: "ApellidosNombres", length: 101 })
  apellidosNombres: string;

  @Column("varchar", { name: "CorreoElectronico", nullable: true, length: 300 })
  correoElectronico: string | null;

  @Column("datetime", { name: "FechaUltimoAcceso", nullable: true })
  fechaUltimoAcceso: Date | null;

  @Column("bit", { name: "Activo", nullable: true })
  activo: boolean | null;

  @Column("varchar", { name: "CreadoPor", nullable: true, length: 30 })
  creadoPor: string | null;

  @Column("datetime", { name: "FechaCreacion", nullable: true })
  fechaCreacion: Date | null;

  @Column("varchar", { name: "EstacionCreacion", nullable: true, length: 30 })
  estacionCreacion: string | null;

  @Column("varchar", { name: "ModificadoPor", nullable: true, length: 30 })
  modificadoPor: string | null;

  @Column("datetime", { name: "UltimaModificacion", nullable: true })
  ultimaModificacion: Date | null;

  @Column("varchar", {
    name: "EstacionModificacion",
    nullable: true,
    length: 30,
  })
  estacionModificacion: string | null;
}
