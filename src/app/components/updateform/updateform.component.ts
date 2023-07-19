import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { equivalentValidator } from 'src/app/home/profilesetting/equivalent.validator';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent  implements OnInit {
  @Output() nextStep: EventEmitter<any> = new EventEmitter<any>();
  form : FormGroup
  constructor(
    private FormBuilder: FormBuilder
  ) {
    this.form = this.FormBuilder.group({
      fullname: [''],
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }),{
      validator: [equivalentValidator('newPassword', 'confirmPassword')]
    }
  }
  submit(){
    console.log(this.form.value);
  }
  ngOnInit() {}
  goToNextStep() {
    this.nextStep.emit(this.form.value);
  }
}



