import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestauranterPage } from './restauranter.page';

const routes: Routes = [
  {
    path: '',
    component: RestauranterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestauranterPageRoutingModule {}
