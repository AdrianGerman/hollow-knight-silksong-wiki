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
  type: z.enum(["activa", "pasiva"]).optional(),
  obtained: z.string().optional(),
});

export const collections = {
  jefes: defineCollection({ type: "content", schema: baseEntry }),
  enemigos: defineCollection({ type: "content", schema: baseEntry }),
  instrumentos: defineCollection({ type: "content", schema: instrumentoEntry }),
  zonas: defineCollection({ type: "content", schema: baseEntry }),
};