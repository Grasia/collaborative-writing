import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VistaComponent }   from './vista/vista.component';
import { FinComponent } from './fin/fin.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
    
    { path: '', redirectTo: 'vista', pathMatch: 'full' },
    { path: 'vista', component: VistaComponent },
    { path: 'fin', component: FinComponent },
    { path: 'second', component: SecondComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
