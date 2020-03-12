import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3Module } from '@incrementalexample/lib3';

@Component({
  selector: 'component-a',
  template: 'component from lib 1 <div><component-c></component-c></div>'
})
export class ComponentA {}

@NgModule({
  imports: [CommonModule, Lib3Module],
  declarations: [ComponentA],
  exports: [ComponentA]
})
export class Lib1Module {}
