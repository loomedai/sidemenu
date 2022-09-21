import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelInfoPage } from './hotel-info.page';

const routes: Routes = [
  {
    path: '',
    component: HotelInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelInfoPageRoutingModule {}
