import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from './shared/shared.module';
import { HotelsModule } from './features/hotels/hotels.module';
import { LoginModule } from './features/login/login.module';

import { AppComponent } from './app.component';

import { HotelsComponent } from './features/hotels/hotels.component';
import { LoginComponent } from './features/login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'hotels', component: HotelsComponent }
];

const isDevEnv = false;

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    BrowserModule,
    HotelsModule,
    LoginModule,
    FlexLayoutModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, {
      enableTracing: isDevEnv ? true : false
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    isDevEnv
      ? StoreDevtoolsModule.instrument({
          maxAge: 5
        })
      : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
