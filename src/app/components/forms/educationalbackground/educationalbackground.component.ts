import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-educationalbackground',
  templateUrl: './educationalbackground.component.html',
  styleUrls: ['./educationalbackground.component.scss'],
})
export class EducationalbackgroundComponent  implements OnInit {
  @Input() formData: any;
  @Output() previousStep: EventEmitter<any> = new EventEmitter<any>();
  @Output() nextStep: EventEmitter<any> = new EventEmitter<any>();

  goToPreviousStep() {
    this.previousStep.emit();
  }

  goToNextStep() {
    this.nextStep.emit(this.formData);
  }
  constructor() { }

  ngOnInit() {}

}
