import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '../../shared/shared.module';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, SharedModule],
  declarations: [LoginFormComponent, LoginComponent]
})
export class LoginModule {}
