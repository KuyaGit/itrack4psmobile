import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component : HomePage,
      children: [
        {
          path: 'beneficiary/form',
          loadChildren: () => import('./beneficiary-form/beneficiary-form.module').then( m => m.BeneficiaryFormPageModule)
        },
        {
          path: 'beneficiary/profile/settings',
          loadChildren: () => import('./profilesetting/profilesetting.module').then( m => m.ProfilesettingPageModule)
        }
      ]
  },
  {
    path: '',
    redirectTo: 'home/beneficiary/form',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
