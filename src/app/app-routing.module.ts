import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sider/hoteller',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sider/hoteller',
    loadChildren: () => import('./sider/hoteller/hoteller.module').then( m => m.HotellerPageModule)
  },
  {
    path: 'attractions',
    loadChildren: () => import('./sider/attractions/attractions.module').then( m => m.AttractionsPageModule)
  },
  {
    path: 'restauranter',
    loadChildren: () => import('./sider/restauranter/restauranter.module').then( m => m.RestauranterPageModule)
  },
  {
    path: 'transport',
    loadChildren: () => import('./sider/transport/transport.module').then( m => m.TransportPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
