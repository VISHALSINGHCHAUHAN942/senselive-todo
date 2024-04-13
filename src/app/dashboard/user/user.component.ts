import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    displayedColumns = ['number', 'schedule', 'responsible', 'frequency', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    dataSource: PeriodicElement[] = []; // Initialize dataSource as an empty array

    constructor(public service: DashboardServiceService) {}

    ngOnInit(): void {
      this.getuserdata();
    }

    getuserdata(){
        this.service.getuserdata().subscribe(
            (data: any) => {
                console.log('API Response:', data); // Log API response
                let counter = 1;
                // Map the received API data to your table data structure
                this.dataSource = data.schedule.map((item: any, index: number) => ({
                    number: counter++,
                    schedule: item.Schedule_Equipment,
                    responsible: item.Responsibility || '', // Use Subtask if it exists, otherwise use an empty string
                    frequency: item.Frequency.toLowerCase(), // Convert frequency to lowercase for consistency
                    january: item.Jan,
                    february: item.Feb,
                    march: item.Mar,
                    april: item.Apr,
                    may: item.May,
                    june: item.Jun,
                    july: item.Jul,
                    august: item.Aug,
                    september: item.Sep,
                    october: item.Oct,
                    november: item.Nov,
                    december: item.Dec
                    
                }));
                console.log('Mapped Data:', this.dataSource); // Log mapped data
            },
            (error: any) => {
                console.error('Error fetching user data:', error);
            }
        );
    }
    

    // Function to get the task status for each month
    getTaskStatus(element: any, month: string) {
        // Replace this logic with your own to determine the task status (completed, pending, not submitted)
        const status = element[month]; // Get the status of the month from the element
        let color = '';
        switch (status) {
            case 0: // Not submitted
                color = '#DE7D70';
                break;
            case 1: // Completed
                color = '#54A954';
                break;
            case 2: // Pending
                color = '#7982E0';
                break;
            case null: // Null value
                color = 'white';
                break;
            default:
                color = 'white';
        }
        return {
            'background-color': color,
            width: '30px', // Adjust the width of the rectangle as per your requirement
            height: '20px' // Adjust the height of the rectangle as per your requirement
        };
    }
}

// Define your PeriodicElement interface and sample data
export interface PeriodicElement {
    number: number;
    schedule: string;
    responsible: string;
    frequency: string;
    january: any; // Use numbers instead of strings for task status
    february: any;
    march: any;
    april: any;
    may: any;
    june: any;
    july: any;
    august: any;
    september: any;
    october: any;
    november: any;
    december: any;
}
