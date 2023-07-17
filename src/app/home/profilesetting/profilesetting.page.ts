import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilesetting',
  templateUrl: './profilesetting.page.html',
  styleUrls: ['./profilesetting.page.scss'],
})
export class ProfilesettingPage implements OnInit {
  formData: any = {};
  newPassword: string = "";
  confirmPassword: string ="";
  constructor() {}
  submit(){
    if (this.newPassword !== this.confirmPassword) {
      // Handle password mismatch error, display an error message, etc.
      console.log('New password and confirmed password do not match.');
      return;
    }
    console.log(this.formData);
  }
  ngOnInit() {
  }
}
