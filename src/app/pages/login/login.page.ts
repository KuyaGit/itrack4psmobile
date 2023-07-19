import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  submitted = false;
  constructor(
    public formBuilder: FormBuilder
    ){
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(30)])]
      });
    }
    saveDetails() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
        return;
      }

      // display form values on success
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
    }
    onReset() {
      this.submitted = false;
      this.loginForm.reset();
    }
  ngOnInit(): void  {

  }

}

