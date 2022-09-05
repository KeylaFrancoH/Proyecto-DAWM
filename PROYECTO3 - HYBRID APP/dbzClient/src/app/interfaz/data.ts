export interface Transformaciones {
    codigo: string,
    saga: string,
    id: string,
    transformacion: string
}

export interface DatosNoSql {
    ataque: number,
    defensa: number,
    fechaNacimiento: Date,
    id: string,
    puntajeMision: string,
    tipoAtaque: string,
    villanos:string
}

export interface dataMision{
    misiones: Array<string>
}