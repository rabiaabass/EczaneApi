import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BolgelerPage } from './bolgeler.page';

const routes: Routes = [
  {
    path: '',
    component: BolgelerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BolgelerPageRoutingModule {}
