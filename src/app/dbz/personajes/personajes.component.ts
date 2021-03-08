import { Component, Input } from '@angular/core';
import { Personaje } from '../interface/dbz.inteface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input() Personajes: Personaje[]=[];

  get personaje(){
    return this.dbzService.personaje;
  }
  constructor(private dbzService: DbzService){

  }

}
