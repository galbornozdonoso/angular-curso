import { Injectable } from "@angular/core";
import { Personaje } from '../interface/dbz.inteface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];
    get personaje(): Personaje[] {
        return [...this._personajes];
    }
    constructor() {
    }
    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}