import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotellerPageRoutingModule } from './hoteller-routing.module';

import { HotellerPage } from './hoteller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotellerPageRoutingModule
  ],
  declarations: [HotellerPage]
})
export class HotellerPageModule {}
