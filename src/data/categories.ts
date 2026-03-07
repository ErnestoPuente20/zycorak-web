export interface Category {
    id: number
    name: string
    slug: string
    image: string
}

export const categories: Category[] = [
    {
        id: 1,
        name: 'POSTRERAS',
        slug: 'postreras',
        image: '/src/assets/images/postreras.png'
    },
    {
        id: 2,
        name: 'USO DIARIO',
        slug: 'uso-diario',
        image: '/src/assets/images/uso-diario.png',
    },
    {
        id: 3,
        name: 'SHOTS & MIXOLOGÍA',
        slug: 'shots-mixologia',
        image: '/src/assets/images/shots-mix.png',
    },
]