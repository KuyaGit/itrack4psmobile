import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ProfilesettingPage } from './profilesetting.page';

describe('ProfilesettingPage', () => {
  let component: ProfilesettingPage;
  let fixture: ComponentFixture<ProfilesettingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilesettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
