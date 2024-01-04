import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignInFormComponent } from './pages/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './pages/sign-up-form/sign-up-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home page',
  },
  {
    path: 'form/sign-in',
    component: SignInFormComponent,
    title: 'sign-in',
  },
  {
    path: 'form/sign-up',
    component: SignUpFormComponent,
    title: 'sign-up',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
