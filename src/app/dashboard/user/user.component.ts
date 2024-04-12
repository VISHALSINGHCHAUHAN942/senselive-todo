import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  displayedColumns = ['number','todo', 'name', 'weight', 'symbol','status','checkbox'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    const options: Highcharts.Options = {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Task Progress'
        },
        plotOptions: {
            pie: {
                innerSize: '50%',
                depth: 45
            }
        },
        series: [{
            type: 'pie', // Explicitly specify the type of series
            name: 'Progress',
            data: [
                ['Completed', 70],
                ['Remaining', 30]
            ]
        }]
    };

    Highcharts.chart('container', options);
}


}
export interface PeriodicElement {
  number:number;
  name: string;
  todo: string;
  weight: number;
  symbol: string;
  status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},

];
