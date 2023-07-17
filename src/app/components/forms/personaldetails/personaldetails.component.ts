import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss'],
})
export class PersonaldetailsComponent  implements OnInit {
  @Output() nextStep: EventEmitter<any> = new EventEmitter<any>();

  formData: any = {};

  goToNextStep() {
    this.nextStep.emit(this.formData);
  }
  constructor() { }

  ngOnInit() {}

}
