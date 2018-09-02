import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import * as SearchWidgetActions from '../actions/searchWidget.actions';
import * as HotelListActions from '../actions/hotelList.actions';
import { HotelsService } from '../../services/hotels';

@Injectable()
export class SearchWidgetEffects {
  constructor(private actions$: Actions, private hotelService: HotelsService) {}

  @Effect()
  fetchHotels$: Observable<Action> = this.actions$.pipe(
    ofType(SearchWidgetActions.SEARCH_HOTELS),
    switchMap((action: SearchWidgetActions.SearchHotels) => {
      console.log('FROM EFFECTS ', action);
      return this.hotelService
        .fetchHotels({ name: action.payload.name, stars: action.payload.stars })
        .pipe(
          // If successful, dispatch success action with result
          map(data => {
            return new HotelListActions.FetchHotelsDone(data);
          }),
          // If request fails, dispatch failed action
          catchError(error => of(new HotelListActions.FetchHotelsFailed(error)))
        );
    })
  );
}
