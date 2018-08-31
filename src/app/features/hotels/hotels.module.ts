import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HotelListComponent } from "./components/hotel-list/hotel-list.component";
import { HotelComponent } from "./components/hotel/hotel.component";
import { AmenityComponent } from "./components/amenity/amenity.component";
import { HotelsComponent } from "./hotels.component";

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [
    HotelListComponent,
    HotelComponent,
    AmenityComponent,
    HotelsComponent
  ],
  exports: [HotelsComponent]
})
export class HotelsModule {}
