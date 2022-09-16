import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestauranterPageRoutingModule } from './restauranter-routing.module';

import { RestauranterPage } from './restauranter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestauranterPageRoutingModule
  ],
  declarations: [RestauranterPage]
})
export class RestauranterPageModule {}
