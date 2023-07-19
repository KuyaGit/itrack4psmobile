import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-beneficiary-form',
  templateUrl: './beneficiary-form.page.html',
  styleUrls: ['./beneficiary-form.page.scss'],
})
export class BeneficiaryFormPage implements OnInit {
  currentStep = 1;
  formData: any = {};
  showSuccess = false;
  goToStep1() {
    this.currentStep = 1;
  }

  goToStep2(formData: any) {
    this.formData = formData;
    this.currentStep = 2;
  }

  goToStep3(formData: any) {
    this.formData = formData;
    this.currentStep = 3;
  }
  form : FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
