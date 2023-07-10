import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeneficiaryFormPageRoutingModule } from './beneficiary-form-routing.module';

import { BeneficiaryFormPage } from './beneficiary-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeneficiaryFormPageRoutingModule,
  ],
  declarations: [
    BeneficiaryFormPage
  ]
})
export class BeneficiaryFormPageModule {}
