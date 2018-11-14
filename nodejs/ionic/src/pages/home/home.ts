import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, NavParams} from 'ionic-angular';
import { APage } from '../a/a';
import { BPage } from '../b/b';
import {RegisterPage} from '../register/register'
import { Action } from 'rxjs/scheduler/Action';
import {ComponentsModule} from '../../components/components.module'
import {HttpClient} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild ('ac') ac;
  items=[];
  list="tuijian";
  constructor(public navCtrl: NavController,public http:HttpClient,public modalCtrl:ModalController) {}
  setlist(str){
    this.list=str;
    console.log(this.list);
  }
  icons:string='camera';
  goto(){
    this.navCtrl.push(APage);
  }
  
  presentProfileModal() {
    let contactModal = this.modalCtrl.create(APage);
    contactModal.present();
  }
  ionViewDidLoad() {
    var add=document.getElementById('tab-t0-2');
    add.addEventListener('click',()=>{
      let contactModal = this.modalCtrl.create(BPage);
      contactModal.present();
    })
}
// gosub(){
//   this.navCtrl.push(RegisterPage);
// }
// doInfinite(infiniteScroll) {
//   // this.http.get('api/course').subscribe((data)=>{
//   //   console.log(data);
//   //   infiniteScroll.complete();
//   // })
//   setTimeout(() => {
//     for (let i = 0; i < 30; i++) {
//       this.items.push( this.items.length );
//     }

//     console.log('Async operation has ended');
//     infiniteScroll.complete();
//     infiniteScroll.enable();
//   }, 500);

// }
// doRefresh(refresher) {
//   console.log('Begin async operation', refresher);

//   setTimeout(() => {
//     console.log('Async operation has ended');
//     refresher.complete();
//   }, 2000);
// }
}
