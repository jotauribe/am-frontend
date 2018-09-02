import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as HotelListActions from '../actions/hotelList.actions';
import { HotelsService } from '../../services/hotels';

@Injectable()
export class HotelListEffects {
  constructor(
    private actions$: Actions,
    private hotelsService: HotelsService
  ) {}

  @Effect()
  fetchAllHotels$: Observable<Action> = this.actions$.pipe(
    ofType(HotelListActions.FETCH_HOTELS),
    switchMap((action: HotelListActions.FetchHotels) =>
      this.hotelsService.fetchAllHotels().pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new HotelListActions.FetchHotelsDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new HotelListActions.FetchHotelsFailed(error)))
      )
    )
  );
}
