import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './admin/home/home.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';


@NgModule({
  declarations: [
    AdminComponent,
    // AdminnavbarComponent,
    // HomeComponent
  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule
  ]
})
export class SuperadminModule { }
