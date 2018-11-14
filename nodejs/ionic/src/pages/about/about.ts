import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  getItems(e){  //当输入框内容变化是调用该函数
    console.log(e.target.value);
  }
  constructor(public navCtrl: NavController) {

  }

}
