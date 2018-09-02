import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels;

  constructor(private store: Store<fromStore.HotelsState>) {
    this.hotels = this.store.pipe(select(fromStore.selectHotels));
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.FetchHotels());
  }
}
