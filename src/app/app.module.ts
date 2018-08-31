import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HotelsModule } from "./features/hotels/hotels.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HotelsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
