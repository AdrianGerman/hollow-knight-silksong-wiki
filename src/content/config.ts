import { defineCollection, z } from 'astro:content'


const media = z.object({
src: z.string().describe('ruta en /src/content/... o /public'),
alt: z.string().default(''),
caption: z.string().optional(),
})


const baseEntry = z.object({
title: z.string(),
slug: z.string().optional(),
excerpt: z.string().optional(),
tags: z.array(z.string()).default([]),
order: z.number().default(0),
cover: media.optional(),
gallery: z.array(media).default([]),
videos: z.array(z.string()).default([]),
location: z.string().optional(),
difficulty: z.enum(['muy-facil','facil','media','dificil','muy-dificil']).optional(),
})


const jefes = defineCollection({
type: 'content',
schema: baseEntry.extend({
salud: z.number().optional(),
fases: z.number().optional(),
recompensas: z.array(z.string()).default([]),
})
})


const enemigos = defineCollection({ type: 'content', schema: baseEntry })
const blasonesHerr = defineCollection({ type: 'content', schema: baseEntry })
const pulgas = defineCollection({ type: 'content', schema: baseEntry.extend({
cantidad: z.number().optional(), 
})})
const habilidades = defineCollection({ type: 'content', schema: baseEntry })
const fragMascara = defineCollection({ type: 'content', schema: baseEntry })
const fragCarrete = defineCollection({ type: 'content', schema: baseEntry })
const zonas = defineCollection({ type: 'content', schema: baseEntry.extend({
conexiones: z.array(z.string()).default([]),
})})


export const collections = {
jefes,
enemigos,
'blasones-herramientas': blasonesHerr,
pulgas,
habilidades,
'fragmentos-mascara': fragMascara,
'fragmentos-carrete': fragCarrete,
zonas,
}