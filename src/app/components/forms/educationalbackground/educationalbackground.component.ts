import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-educationalbackground',
  templateUrl: './educationalbackground.component.html',
  styleUrls: ['./educationalbackground.component.scss'],
})
export class EducationalbackgroundComponent  implements OnInit {
  @Input() form: FormGroup;
  @Output() previousStep: EventEmitter<any> = new EventEmitter<any>();
  @Output() nextStep: EventEmitter<any> = new EventEmitter<any>();

  submitted = false;
  goToPreviousStep() {
    this.previousStep.emit();
  }

  goToNextStep() {
    this.nextStep.emit(this.form.value);
  }
  constructor(
    public formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      shs: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      track: [null, [Validators.required]],
      yearGraduated: [null, [Validators.required]],
      college: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      course: [null, [Validators.required]],
      department: [null, [Validators.required]],
      schoolAddress: [null, [Validators.required]],
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
