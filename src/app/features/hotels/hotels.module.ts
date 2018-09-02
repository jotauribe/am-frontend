import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { AmenityComponent } from './components/amenity/amenity.component';
import { HotelsComponent } from './hotels.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';
import { HotelsService } from './services/hotels';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    StoreModule.forFeature('hotels', reducers),
    //
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    HotelListComponent,
    HotelComponent,
    AmenityComponent,
    HotelsComponent
  ],
  exports: [HotelsComponent],
  providers: [HotelsService]
})
export class HotelsModule {}
