import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthenticationService } from './services/authentication.service';

const routes: Routes = [
  {path: '', component: SignUpComponent, canActivate: [AuthenticationService]},
  {path: 'home', loadChildren: () => import('./modules/home/home-routing.module').then(m => m.HomeRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
