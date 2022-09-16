import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sider/home',
    pathMatch: 'full'
  },
 
  {
    path: 'sider/hoteller',
    loadChildren: () => import('./sider/hoteller/hoteller.module').then( m => m.HotellerPageModule)
  },
  {
    path: 'sider/attractions',
    loadChildren: () => import('./sider/attractions/attractions.module').then( m => m.AttractionsPageModule)
  },
  {
    path: 'sider/restauranter',
    loadChildren: () => import('./sider/restauranter/restauranter.module').then( m => m.RestauranterPageModule)
  },
  {
    path: 'sider/transport',
    loadChildren: () => import('./sider/transport/transport.module').then( m => m.TransportPageModule)
  },
  {
    path: 'sider/home',
    loadChildren: () => import('./sider/home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
