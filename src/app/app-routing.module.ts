import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tambah-produk', loadChildren: './tambah-produk/tambah-produk.module#TambahProdukPageModule' },
  { path: 'kerajang-belanja', loadChildren: './kerajang-belanja/kerajang-belanja.module#KerajangBelanjaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
