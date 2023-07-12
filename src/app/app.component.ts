import { Component } from '@angular/core';
  interface pages{
    title: string;
    url: string;
    icon: string;
  }
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages : any [] = [
    {title: 'Form', url: '/home/beneficiary/form', icon: 'apps'},
    {title: 'Profile Settings', url: '/home/profile', icon: "person-circle"},
  ];
  constructor() {}
}
