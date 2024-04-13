import { Component } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import { Subject, endWith, startWith } from 'rxjs';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
  selectedDate: Date = new Date(); // Set initial selected date
  eventSettings: EventSettingsModel = { dataSource: [] }; 
  public setview: View = 'Month';
  public eventObject: EventSettingsModel={
    dataSource:[{
      Subject:'task1',
      startWith:new Date(2024,3,14,18,0),
      endWith:new Date(2024,3,14,19,0)
    }]
  }
}
