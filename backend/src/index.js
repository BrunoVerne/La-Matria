import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

/* =========================
   CLIENTES
========================= */

// Crear cliente
app.post("/clientes", async (req, res) => {
  try {
    const { nombre, mail, nacimiento, telefono } = req.body;

    const cliente = await prisma.cliente.create({
      data: {
        nombre,
        mail,
        telefono,
      },
    });

    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Error creando cliente" });
  }
});

// Obtener clientes con servicios
app.get("/clientes", async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany({
      include: {
        servicios: {
          include: {
            servicio: true,
          },
        },
      },
    });

    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo clientes" });
  }
});

/* =========================
   SERVICIOS
========================= */

// Crear servicio
app.post("/servicios", async (req, res) => {
  try {
    const { costo, duracion, detalle } = req.body;

    const servicio = await prisma.servicio.create({
      data: {
        costo,
        duracion,
        detalle,
      },
    });

    res.json(servicio);
  } catch (error) {
    res.status(500).json({ error: "Error creando servicio" });
  }
});

// Obtener servicios con clientes
app.get("/servicios", async (_req, res) => {
  try {
    const servicios = await prisma.servicio.findMany({
      include: {
        clientes: {
          include: {
            cliente: true,
          },
        },
      },
    });

    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo servicios" });
  }
});

/* =========================
   CONTRATAR SERVICIO (N:N)
========================= */

app.post("/contratar", async (req, res) => {
  try {
    const { clienteId, servicioId, fechaContratacion, descuento } = req.body;

    const relacion = await prisma.clienteServicio.create({
      data: {
        clienteId,
        servicioId,
        fechaContratacion: new Date(fechaContratacion),
        descuento,
      },
    });

    res.json(relacion);
  } catch (error) {
    res.status(500).json({ error: "Error contratando servicio" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
