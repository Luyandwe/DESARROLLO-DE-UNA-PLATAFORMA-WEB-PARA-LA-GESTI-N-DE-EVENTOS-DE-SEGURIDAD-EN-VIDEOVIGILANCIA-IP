import { Router } from "express";
import { EventoService } from "../../application/services/EventoService.js";

const router = Router();
const eventoService = new EventoService();

router.get("/", (_req, res) => {
  res.json(eventoService.listar());
});

router.get("/:id", (req, res) => {
  const evento = eventoService.obtenerPorId(req.params.id);

  if (!evento) {
    return res.status(404).json({
      mensaje: "Evento no encontrado"
    });
  }

  return res.json(evento);
});

router.post("/", (req, res) => {
  const evento = eventoService.registrar(req.body);

  return res.status(201).json(evento);
});

router.patch("/:id/estado", (req, res) => {
  const evento = eventoService.cambiarEstado(
    req.params.id,
    req.body.estado
  );

  if (!evento) {
    return res.status(404).json({
      mensaje: "Evento no encontrado"
    });
  }

  return res.json(evento);
});

export default router;