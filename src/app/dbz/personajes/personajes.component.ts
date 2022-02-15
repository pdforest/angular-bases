import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';
//import { personajes } from '../interfaces/dbz.personajes';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input('data')
  //personajes: Personaje[] = [];

  constructor(private dbzService: DbzService){}

  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }

}
