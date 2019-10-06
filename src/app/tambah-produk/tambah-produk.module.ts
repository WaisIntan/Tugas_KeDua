import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TambahProdukPage } from './tambah-produk.page';

const routes: Routes = [
  {
    path: '',
    component: TambahProdukPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TambahProdukPage]
})
export class TambahProdukPageModule {}
