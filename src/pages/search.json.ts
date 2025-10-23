import { getCollection } from 'astro:content'


export async function GET () {
  const cats = ['jefes', 'enemigos', 'blasones-herramientas', 'pulgas', 'habilidades', 'fragmentos-mascara', 'fragmentos-carrete', 'zonas']
  const all = await Promise.all(cats.map(c => getCollection(c)))
  const items = all.flat().map(x => ({
    title: x.data.title,
    excerpt: x.data.excerpt || '',
    url: `/${x.collection}/${x.slug}`,
    category: x.collection,
  }))
  return new Response(JSON.stringify(items))
}