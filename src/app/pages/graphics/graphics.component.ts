import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styles: [
  ]
})
export class GraphicsComponent {

public labels1 : string[]= ["ventas1","ventas2","Ventas3"];
public data1: ChartData<'doughnut'> = {
  labels: this.labels1,
  datasets: [
    { data: [ 40, 45, 10 ] },
  ]
};

}
