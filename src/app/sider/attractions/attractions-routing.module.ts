import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttractionsPage } from './attractions.page';

const routes: Routes = [
  {
    path: '',
    component: AttractionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttractionsPageRoutingModule {}
