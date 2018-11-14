import { Component } from '@angular/core';

/**
 * Generated class for the FristComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'frist',
  templateUrl: 'frist.html'
})
export class FristComponent {
  arr1=["数码宝贝","虹猫蓝兔七侠传","超级马里奥"];
  constructor() {
    console.log('Hello FristComponent Component');
  }

}
