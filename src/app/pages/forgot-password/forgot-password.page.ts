import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgot: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.forgot = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit() {
  }
  saveDetails() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgot.invalid) {
      return;
    }

    // display form values on success
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgot.value, null, 4));
  }
  onReset() {
    this.submitted = false;
    this.forgot.reset();
  }
}
