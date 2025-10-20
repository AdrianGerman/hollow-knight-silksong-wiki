export const CATEGORIES = [
  "jefes",
  "enemigos",
  "blasones",
  "pulgas",
  "habilidades",
  "fragmentos-mascara",
  "fragmentos-carrete",
  "zonas",
] as const;

export type Category = typeof CATEGORIES[number];
