import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Iroman','Hulk','thor'];
  hborrado: string = '';
  borrarHeroe() {
    console.log('borrando');
    this.hborrado = this.heroes.shift() || '';
  }

}
