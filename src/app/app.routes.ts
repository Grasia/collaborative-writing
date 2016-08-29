import { Routes } from '@angular/router';

import { LandingComponent } from './landing';
import { ProfileComponent } from "./profile";
import { EditorComponent } from './editor';
import { NoContent } from './no-content';
import { AuthenticationComponent } from "./authentication";

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [

  {
    path: '',
    component: LandingComponent
  },

  {
    path: 'authentication',
    component: AuthenticationComponent
  },

  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'edit/:id',
    component: EditorComponent
  },

  {
    path: '**',
    component: NoContent
  },

];
