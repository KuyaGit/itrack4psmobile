import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent  implements OnInit {
  @Input() formData: any;
  @Output() previousStep: EventEmitter<any> = new EventEmitter<any>();
  @Output() nextStep: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

}
