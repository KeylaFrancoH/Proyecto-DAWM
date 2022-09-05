export interface Personajes {
    id: string,
    nombre: string,
    raza: string,
    genero: string,
    kiLevel: number,
    imagen: string
}

export interface character {
    personaje: Array<Personajes>
}
