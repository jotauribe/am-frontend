import { Action } from '@ngrx/store';
import { Hotel } from '../../models/hotel.model';

const ACTIONS_NAMESPACE = 'HOTEL-LIST';

// Action Types

export const FETCH_HOTELS = `${ACTIONS_NAMESPACE} - Fetch hotels`;
export const FETCH_HOTELS_DONE = `${ACTIONS_NAMESPACE} - Fetch hotels done`;
export const FETCH_HOTELS_FAILED = `${ACTIONS_NAMESPACE} - Fetch hotels failed`;

// Actions
export class FetchHotels implements Action {
  readonly type = FETCH_HOTELS;

  constructor(public payload?: any) {}
}

export class FetchHotelsDone implements Action {
  readonly type = FETCH_HOTELS_DONE;

  constructor(public payload: Hotel[]) {}
}

export class FetchHotelsFailed implements Action {
  readonly type = FETCH_HOTELS_FAILED;

  constructor(public payload: any) {}
}

export type Actions = FetchHotels | FetchHotelsDone | FetchHotelsFailed;
