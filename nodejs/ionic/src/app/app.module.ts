import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {APage} from '../pages/a/a'
import { BPage } from '../pages/b/b'
import { LingganPage} from '../pages/linggan/linggan';
import {RegisterPage} from '../pages/register/register';
import {ShezhiPage } from '../pages/shezhi/shezhi';
import { LoginPage } from '../pages/login/login';

import {ComponentsModule} from "../components/components.module"

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPageModule } from '../pages/register/register.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    LingganPage,
    ShezhiPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{

      tabsHideOnSubPages:true,//隐藏子页面上的选项卡
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    LingganPage,
    ShezhiPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
