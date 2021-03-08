import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';


interface Personaje {
  nombre: string;
  poder: number;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  
  constructor() {
    

  }


}
