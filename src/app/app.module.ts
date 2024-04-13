// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { UserComponent } from './dashboard/user/user.component';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { LoginModule } from './login/login.module';
import { ForgotComponent } from './login/forgot/forgot.component';
import { RegisterComponent } from './login/register/register.component';
import { CalenderComponent } from './dashboard/user/calender/calender.component';
import { ScheduleModule,RecurrenceEditorModule,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { NavbarComponent } from './dashboard/user/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './superadmin/admin/home/home.component';
import { AdminnavbarComponent } from './superadmin/admin/adminnavbar/adminnavbar.component';
import { HttpClientModule } from '@angular/common/http';
// Import the license key file




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CalenderComponent,
    ForgotComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    AdminnavbarComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    ScheduleModule,
    RecurrenceEditorModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule

  ],
  providers: [DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
