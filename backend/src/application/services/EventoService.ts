import {
  Evento,
  EstadoEvento
} from "../../domain/entities/Evento.js";

export class EventoService {
  private eventos: Evento[] = [];

  listar(): Evento[] {
    return this.eventos;
  }

  obtenerPorId(id: string): Evento | undefined {
    return this.eventos.find((evento) => evento.id === id);
  }

  registrar(datos: Omit<Evento, "id" | "fecha">): Evento {
    const evento: Evento = {
      id: crypto.randomUUID(),
      ...datos,
      fecha: new Date().toISOString()
    };

    this.eventos.push(evento);

    return evento;
  }

  cambiarEstado(
    id: string,
    estado: EstadoEvento
  ): Evento | undefined {
    const evento = this.obtenerPorId(id);

    if (!evento) {
      return undefined;
    }

    evento.estado = estado;

    return evento;
  }
}