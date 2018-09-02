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
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';
import { NameFormComponent } from './components/name-form/name-form.component';
import { StarsFormComponent } from './components/stars-form/stars-form.component';
import { StarCheckboxComponent } from './components/star-checkbox/star-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    StoreModule.forFeature('hotels', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    HotelListComponent,
    HotelComponent,
    AmenityComponent,
    HotelsComponent,
    SearchWidgetComponent,
    NameFormComponent,
    StarsFormComponent,
    StarCheckboxComponent
  ],
  exports: [HotelsComponent],
  providers: [HotelsService]
})
export class HotelsModule {}
