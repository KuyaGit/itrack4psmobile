import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { equivalentValidator } from './equivalent.validator';
@Component({
  selector: 'app-profilesetting',
  templateUrl: './profilesetting.page.html',
  styleUrls: ['./profilesetting.page.scss'],
})
export class ProfilesettingPage implements OnInit {
  @Output() nextStep: EventEmitter<any> = new EventEmitter<any>();

  currentStep = 1;

  constructor() {}

  ngOnInit() {
  }
  goToStep1() {
    this.currentStep = 1;
  }

  goToStep2(formData: any) {
    this.currentStep = 2;
  }
  
}
