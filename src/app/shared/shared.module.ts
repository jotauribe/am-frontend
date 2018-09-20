import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AmInputComponent } from './components/am-input/am-input.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [NavbarComponent, AmInputComponent],
  exports: [AmInputComponent, NavbarComponent]
})
export class SharedModule {}
