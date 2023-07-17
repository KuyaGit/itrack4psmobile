import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonaldetailsComponent } from './components/forms/personaldetails/personaldetails.component';
import { EducationalbackgroundComponent } from './components/forms/educationalbackground/educationalbackground.component';
import { ConfirmationComponent } from './components/forms/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
