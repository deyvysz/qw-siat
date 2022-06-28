import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  @Input() title :string = "Sin Titulo";
  @Input() labels: string[] = [ 'Label1', 'Label2', 'label3' ];

  @Input('data') public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { data: [ 350, 450, 100 ] },

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
