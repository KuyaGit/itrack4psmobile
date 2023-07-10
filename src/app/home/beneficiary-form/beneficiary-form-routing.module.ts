import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeneficiaryFormPage } from './beneficiary-form.page';

const routes: Routes = [
  {
    path: '',
    component: BeneficiaryFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiaryFormPageRoutingModule {}
