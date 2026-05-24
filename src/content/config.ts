import { defineCollection, z } from "astro:content";

const media = z.object({
  src: z.string(),
  alt: z.string().default(""),
  caption: z.string().optional(),
});

const baseEntry = z.object({
  title: z.string(),
  excerpt: z.string().optional(),
  order: z.number().default(0),
  tags: z.array(z.string()).default([]),
  cover: media.optional(),
  videos: z.array(z.string()).default([]),
  gallery: z.array(media).default([]),
});

const instrumentoEntry = baseEntry.extend({
  category: z.string().default("herramientas"),
  color: z.enum(["rojo", "azul", "amarillo"]).optional(),
  obtained: z.string().optional(),
});

const zonaEntry = baseEntry.extend({
  acto: z.enum(["Acto I", "Acto II", "Acto III"]).optional(),
  tipo: z.enum(["Principal", "Secundaria", "Secreta"]).default("Principal"),
  jefes: z.array(z.string()).default([]),
  conexiones: z.array(z.string()).default([]),
});

const blasonEntry = baseEntry.extend({
  slots: z.object({
    rojo: z.number().default(0),
    azul: z.number().default(0),
    amarillo: z.number().default(0),
    blanco: z.number().default(0),
  }).optional(),
  ubicacion: z.string().optional(),
  acto: z.enum(["Acto I", "Acto II", "Acto III"]).optional(),
});

const habilidadEntry = baseEntry.extend({
  tipo: z.enum(["Ofensiva", "Defensiva", "Movilidad", "Utilidad"]).optional(),
  seda: z.number().optional(),
  ubicacion: z.string().optional(),
  acto: z.enum(["Acto I", "Acto II", "Acto III"]).optional(),
});

export const collections = {
  jefes: defineCollection({ type: "content", schema: baseEntry }),
  enemigos: defineCollection({ type: "content", schema: baseEntry }),
  instrumentos: defineCollection({ type: "content", schema: instrumentoEntry }),
  zonas: defineCollection({ type: "content", schema: zonaEntry }),
  blasones: defineCollection({ type: "content", schema: blasonEntry }),
  habilidades: defineCollection({ type: "content", schema: habilidadEntry }),
};