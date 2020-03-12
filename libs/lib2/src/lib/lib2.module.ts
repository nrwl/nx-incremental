import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3Module } from '@incrementalexample/lib3';

@Component({
  selector: 'component-b',
  template: 'component from lib 2<div><component-c></component-c></div>'
})
export class ComponentB {}

@NgModule({
  imports: [CommonModule, Lib3Module],
  declarations: [ComponentB],
  exports: [ComponentB]
})
export class Lib2Module {}
