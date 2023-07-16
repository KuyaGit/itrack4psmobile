import { Component } from '@angular/core';
import { Page } from '../interfaces/pages.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public pages : Page [] = [
    {title: 'Form', url: 'beneficiary/form', icon: 'apps'},
    {title: 'Profile Settings', url: 'beneficiary/profile/settings', icon: "person-circle"},
  ];
  constructor() {}

}
