import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";
import { personajes } from '../interfaces/dbz.personajes';


@Injectable()
export class DbzService {

    private _personajes = personajes;

    get personajes(): Personaje[]{
        return [...personajes];
    }

    constructor(){}

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}



