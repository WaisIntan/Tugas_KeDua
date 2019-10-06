import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KerajangBelanjaPage } from './kerajang-belanja.page';

const routes: Routes = [
  {
    path: '',
    component: KerajangBelanjaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KerajangBelanjaPage]
})
export class KerajangBelanjaPageModule {}
