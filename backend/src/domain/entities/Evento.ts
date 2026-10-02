export type EstadoEvento =
  | "PENDIENTE"
  | "EN_ATENCION"
  | "ATENDIDO"
  | "CERRADO";

export type PrioridadEvento =
  | "BAJA"
  | "MEDIA"
  | "ALTA"
  | "CRITICA";

export interface Evento {
  id: string;
  tipo: string;
  descripcion: string;
  prioridad: PrioridadEvento;
  estado: EstadoEvento;
  ubicacion: string;
  fecha: string;
}