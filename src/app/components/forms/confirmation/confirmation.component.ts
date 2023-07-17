import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent  implements OnInit {
  @Input() formData: any;
  @Output() previousStep: EventEmitter<any> = new EventEmitter<any>();
  @Output() nextStep: EventEmitter<any> = new EventEmitter<any>();

  goToPreviousStep() {
    this.previousStep.emit();
  }

  goToNextStep() {
    console.log(this.formData);
    this.nextStep.emit(this.formData);
  }

  constructor() { }

  ngOnInit() {}

}
