import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
// Define FormGroup to hold the form controls
firstFormGroup: FormGroup;

// Define FormControl for each form input
companyEmail = new FormControl('', [Validators.required, Validators.email]);
companyName = new FormControl('', [Validators.required]);
companyLocation = new FormControl('', [Validators.required]);
energy_consumer = new FormControl('', [Validators.required]);
sanctioned_load = new FormControl('', [Validators.required]);
contract_demand = new FormControl('', [Validators.required]);
connected_load = new FormControl('', [Validators.required]);
tariff = new FormControl('', [Validators.required]);
percent_demand = new FormControl('');
bill = new FormControl('');
energy_detail = new FormControl('');
energy_value = new FormControl('');

constructor() {
  // Initialize FormGroup with FormControls
  this.firstFormGroup = new FormGroup({
    companyEmail: this.companyEmail,
    companyName: this.companyName,
    companyLocation: this.companyLocation,
    energy_consumer: this.energy_consumer,
    sanctioned_load: this.sanctioned_load,
    contract_demand: this.contract_demand,
    connected_load: this.connected_load,
    tariff: this.tariff,
    percent_demand: this.percent_demand,
    bill: this.bill,
    energy_detail: this.energy_detail,
    energy_value: this.energy_value
  });
}

// Method to handle form submission
onSubmit() {
  // Log form values to console
  console.log('Form Data:', this.firstFormGroup.value);
}

}