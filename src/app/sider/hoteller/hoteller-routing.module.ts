import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotellerPage } from './hoteller.page';

const routes: Routes = [
  {
    path: '',
    component: HotellerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotellerPageRoutingModule {}
