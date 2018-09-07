import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HotelsModule } from './features/hotels/hotels.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HotelsComponent } from './features/hotels/hotels.component';

const appRoutes: Routes = [
  { path: 'login', component: HotelsComponent },
  { path: 'hotels', component: HotelsComponent }
];

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    HotelsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, {
      enableTracing: isDevMode() ? true : false
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    isDevMode()
      ? StoreDevtoolsModule.instrument({
          maxAge: 5
        })
      : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
