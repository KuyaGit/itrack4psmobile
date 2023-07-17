import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EducationalbackgroundComponent } from './educationalbackground.component';

describe('EducationalbackgroundComponent', () => {
  let component: EducationalbackgroundComponent;
  let fixture: ComponentFixture<EducationalbackgroundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalbackgroundComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationalbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
