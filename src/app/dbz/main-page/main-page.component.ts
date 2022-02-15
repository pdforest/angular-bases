import { Component } from '@angular/core';
//import { Personaje } from '../interfaces/dbz.interfaces';
//import { nuevo, personajes } from '../interfaces/dbz.personajes';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  //personajes = personajes;

  //nuevo = nuevo;

  // La inyeccion de dependencia como en Spring 
  // en Typescript va en el Constructor
  constructor(private dbzService: DbzService){}

  /*
  agregarNuevoPersonaje(argumento: Personaje){
    this.personajes.push(argumento);
  }
*/

}
