import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

const routes: Routes = [
  {path: '', component:HomePageComponent, canActivateChild: [AuthenticationService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
