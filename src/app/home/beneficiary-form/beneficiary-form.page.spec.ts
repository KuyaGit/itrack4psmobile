import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BeneficiaryFormPage } from './beneficiary-form.page';

describe('BeneficiaryFormPage', () => {
  let component: BeneficiaryFormPage;
  let fixture: ComponentFixture<BeneficiaryFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BeneficiaryFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
