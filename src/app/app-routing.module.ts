import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DownloadOwlComponentComponent} from './download-owl/download-owl.component';
import {SelectIndividualsComponentComponent} from './select_individuals/select-individuals.component';
import {CreateDBComponentComponent} from './create-db/create-db.component';



const routes: Routes = [
  {
    path: 'download-owl',
    component: DownloadOwlComponentComponent
  },
  {
    path: 'select-individuals',
    component: SelectIndividualsComponentComponent
  },
  {
    path: 'create-db',
    component: CreateDBComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
