import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  displayedColumns = ['number','todo','responsible', 'name', 'weight', 'symbol','status','add'];
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
  responsible:string;
  name: string;
  todo: string;
  weight: string;
  symbol: string;
  status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {number:1,todo:'Get ready for annual meeting', responsible:'M.Labkhale',name: '11/04/2024', weight:'16/04/2024' , symbol: '2',status:'completed'},
  {number:2,todo:'Get ready for annual meeting', responsible:'M.Labkhale',name: '11/04/2024', weight:'16/04/2024' , symbol: '2',status:'completed'},
  {number:3,todo:'Get ready for annual meeting', responsible:'M.Labkhale',name: '11/04/2024', weight:'16/04/2024' , symbol: '2',status:'completed'},
  {number:4,todo:'Get ready for annual meeting', responsible:'M.Labkhale',name: '11/04/2024', weight:'16/04/2024' , symbol: '2',status:'completed'},
  {number:5,todo:'Get ready for annual meeting', responsible:'M.Labkhale',name: '11/04/2024', weight:'16/04/2024' , symbol: '2',status:'completed'},
  {number:6,todo:'Get ready for annual meeting', responsible:'M.Labkhale',name: '11/04/2024', weight:'16/04/2024' , symbol: '2',status:'completed'},
  {number:7,todo:'Get ready for annual meeting', responsible:'M.Labkhale',name: '11/04/2024', weight:'16/04/2024' , symbol: '2',status:'completed'},
  {number:8,todo:'Get ready for annual meeting', responsible:'M.Labkhale',name: '11/04/2024', weight:'16/04/2024' , symbol: '2',status:'completed'},
  {number:9,todo:'Get ready for annual meeting', responsible:'M.Labkhale',name: '11/04/2024', weight:'16/04/2024' , symbol: '2',status:'completed'},
  {number:10,todo:'Get ready for annual meeting', responsible:'M.Labkhale',name: '11/04/2024', weight:'16/04/2024' , symbol: '2',status:'completed'},
  {number:11,todo:'Get ready for annual meeting', responsible:'M.Labkhale',name: '11/04/2024', weight:'16/04/2024' , symbol: '2',status:'completed'},
  {number:12,todo:'Get ready for annual meeting', responsible:'M.Labkhale',name: '11/04/2024', weight:'16/04/2024' , symbol: '2',status:'completed'},
  {number:13,todo:'Get ready for annual meeting', responsible:'M.Labkhale',name: '11/04/2024', weight:'16/04/2024' , symbol: '2',status:'completed'},




];

