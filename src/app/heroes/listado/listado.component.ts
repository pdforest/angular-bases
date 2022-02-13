import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];

  heroeBorrado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe():void {
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
