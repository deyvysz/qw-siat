import { Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent  {
  progreso1: number = 25;
  progreso2: number = 50;

  get porcentajeP1(){
    return this.progreso1 + '%'
  }
  get porcentajeP2(){
    return this.progreso2 + '%'
  }

  cambioValorHijo(valor: number)
  {
    this.progreso1 = valor;
    console.log("Hola",valor) ;
  }
}
