import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {APage} from '../a/a'
import { BPage} from '../b/b'
import { LingganPage } from '../linggan/linggan'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab5Root = ContactPage;
  tab4Root = LingganPage;
  tab3Root = BPage;

  constructor() {

  }
}
