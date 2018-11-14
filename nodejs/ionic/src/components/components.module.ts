import { NgModule } from '@angular/core';
import { FristComponent } from './frist/frist';
import { BrowserModule } from '@angular/platform-browser';
import { SecondComponent } from './second/second';
@NgModule({
	declarations: [FristComponent,
    SecondComponent],
	imports: [
		BrowserModule
	],
	exports: [FristComponent,
    SecondComponent]
})
export class ComponentsModule {}
