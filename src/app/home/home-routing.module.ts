import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'beneficiary/form',
    loadChildren: () => import('./beneficiary-form/beneficiary-form.module').then( m => m.BeneficiaryFormPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profilesetting/profilesetting.module').then( m => m.ProfilesettingPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
