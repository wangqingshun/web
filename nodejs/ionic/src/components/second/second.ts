import { Component } from '@angular/core';

/**
 * Generated class for the SecondComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'second',
  templateUrl: 'second.html'
})
export class SecondComponent {

  text: string;

  constructor() {
    console.log('Hello SecondComponent Component');
    this.text = 'Hello World';
  }

}
