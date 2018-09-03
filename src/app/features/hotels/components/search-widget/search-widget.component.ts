import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.css']
})
export class SearchWidgetComponent implements OnInit {
  selectedStars: string[];
  selectedHotelName: string;
  isCollapsed = false;
  windowSize: number;

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth < 600 && !this.isCollapsed) {
      this.isCollapsed = true;
    }
    if (window.innerWidth > 600 && this.isCollapsed) {
      this.isCollapsed = false;
    }
    this.windowSize = window.innerWidth;
  }

  constructor(private store: Store<fromStore.HotelsState>) {
    this.selectedStars = [];
    this.windowSize = window.innerWidth;
  }

  ngOnInit() {}

  onSelectedHotelName(event) {
    this.selectedHotelName = event.selectedHotelName;
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

  onCollapse() {
    if (this.windowSize < 600) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  isOnSmallScreen() {
    return this.windowSize < 600;
  }
}
