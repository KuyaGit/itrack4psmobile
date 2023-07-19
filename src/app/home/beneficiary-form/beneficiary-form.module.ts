import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeneficiaryFormPageRoutingModule } from './beneficiary-form-routing.module';

import { BeneficiaryFormPage } from './beneficiary-form.page';
import { PersonaldetailsComponent } from 'src/app/components/forms/personaldetails/personaldetails.component';
import { EducationalbackgroundComponent } from 'src/app/components/forms/educationalbackground/educationalbackground.component';

import { SuccessComponent } from 'src/app/components/forms/success/success.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeneficiaryFormPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BeneficiaryFormPage,
    PersonaldetailsComponent,
    EducationalbackgroundComponent,

    SuccessComponent

  ]
})
export class BeneficiaryFormPageModule {}
