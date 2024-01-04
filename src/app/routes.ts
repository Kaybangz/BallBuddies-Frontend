import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Event } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignInFormComponent } from './pages/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './pages/sign-up-form/sign-up-form.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    title: 'page-not-found',
  },
];

export default routeConfig;
