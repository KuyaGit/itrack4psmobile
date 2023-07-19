import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilesettingPageRoutingModule } from './profilesetting-routing.module';

import { ProfilesettingPage } from './profilesetting.page';

import { UpdatesucccessComponent } from 'src/app/components/updatesucccess/updatesucccess.component';
import { UpdateformComponent } from 'src/app/components/updateform/updateform.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilesettingPageRoutingModule,
    ReactiveFormsModule,


  ],
  declarations: [ProfilesettingPage, UpdatesucccessComponent, UpdateformComponent]
})
export class ProfilesettingPageModule {}
