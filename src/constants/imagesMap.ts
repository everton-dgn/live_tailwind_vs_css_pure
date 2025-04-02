const generateImages = (pasta: string, quantidade: number) =>
  Array.from({ length: quantidade }, (_, i) => `/images/${pasta}/${i}.jpeg`)

export const artistasPopulares = generateImages('artistas-populares', 20)

export const bonsSonhosImg = generateImages('bons-sonhos', 10)

export const estacoesDeRadiosPopulares = generateImages(
  'estacoes-de-radios-populares',
  20
)

export const musicasEmAlta = generateImages('musicas-em-alta', 19)

export const singlesEAlbunsQueTodoMundoGosta = generateImages(
  'singles-e-albuns-que-todo-mundo-gosta',
  19
)
