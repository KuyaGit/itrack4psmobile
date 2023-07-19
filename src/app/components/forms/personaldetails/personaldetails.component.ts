import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss'],
})
export class PersonaldetailsComponent  implements OnInit {
  @Output() nextStep: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;

  submitted = false;

  goToNextStep() {
    this.nextStep.emit(this.form.value);
  }
  constructor(
    public formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      dob: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      gender: [null, [Validators.required]],
      address: [null, [Validators.required]],
      fName: [null, [Validators.required]],
      mName: [null, [Validators.required]],
    });
  }

  saveDetails() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // display form values on success
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
  }
  onReset() {
    this.submitted = false;
    this.form.reset();
  }
  ngOnInit() {}

}
