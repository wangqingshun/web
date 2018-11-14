import { Component } from '@angular/core';
import { NavController ,ModalController} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { BPage } from '../b/b'
import { ShezhiPage } from '../shezhi/shezhi'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild(Slides) slides:Slides;
  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {
  }
  goshezhi(){
    this.navCtrl.push(ShezhiPage );
  }

  // ionViewDidLoad(){
  //   console.log(this.slides.getActiveIndex());
  // }
  // change(){
  //   console.log(this.slides.getActiveIndex());
  // }
}
