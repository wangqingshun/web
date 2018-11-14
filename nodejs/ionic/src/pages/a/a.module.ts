import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { APage } from './a';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@NgModule({
  declarations: [
    APage,
  ],
  imports: [
    IonicPageModule.forChild(APage),
  ],
})
export class APageModule {}
