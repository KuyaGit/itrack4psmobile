import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-updatesucccess',
  templateUrl: './updatesucccess.component.html',
  styleUrls: ['./updatesucccess.component.scss'],
})
export class UpdatesucccessComponent  implements OnInit {
  @Input() formData: any;
  @Output() previousStep: EventEmitter<any> = new EventEmitter<any>();
  @Output() nextStep: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}

}
