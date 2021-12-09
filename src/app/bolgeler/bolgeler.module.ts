import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BolgelerPageRoutingModule } from './bolgeler-routing.module';

import { BolgelerPage } from './bolgeler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BolgelerPageRoutingModule
  ],
  declarations: [BolgelerPage]
})
export class BolgelerPageModule {}
