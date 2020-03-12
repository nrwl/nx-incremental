import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-c',
  template: 'component from lib 3'
})
export class ComponentC {}

@NgModule({
  imports: [CommonModule],
  declarations: [ComponentC],
  exports: [ComponentC]
})
export class Lib3Module {}
