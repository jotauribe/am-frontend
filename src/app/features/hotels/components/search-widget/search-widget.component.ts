import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.css']
})
export class SearchWidgetComponent implements OnInit {
  selectedStars: [];
  selectedHotelName: string;

  constructor(private store: Store<fromStore.HotelsState>) {
    this.selectedStars = [];
  }

  ngOnInit() {}

  onSelectedHotelName(event) {
    this.selectedHotelName = event.selectedHotelName;
    console.log('EVENTS FROM SEARCH WIDGET ', event);
    this.store.dispatch(
      new fromStore.SearchHotels({
        name: event.selectedHotelName,
        stars: this.selectedStars
      })
    );
  }

  onSelectedStars(event) {
    this.selectedStars = event.selectedStars;
    this.store.dispatch(
      new fromStore.SearchHotels({
        name: this.selectedHotelName,
        stars: this.selectedStars
      })
    );
  }
}
