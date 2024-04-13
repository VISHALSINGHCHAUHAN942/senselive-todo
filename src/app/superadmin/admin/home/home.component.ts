import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  displayedColumns = ['number','todo', 'name', 'weight', 'symbol','status','add'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
   this.piechartfun();
}
piechartfun(){
    const options: Highcharts.Options = {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 50
            }
        },
        title: {
            text: 'Task Progress'
        },
        plotOptions: {
            pie: {
                innerSize: '40%',
                depth: 45
            }
        },
        series: [{
            type: 'pie', 
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
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},
  {number:1,todo:'Get ready for annual meeting', name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'completed'},

];

