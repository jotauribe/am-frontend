import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';

import * as fromHotelList from './hotelList.reducer';
import { Actions } from '../actions/hotelList.actions';

export interface HotelsState {
  hotelList: fromHotelList.State;
}

export const reducers: ActionReducerMap<HotelsState> = {
  hotelList: fromHotelList.reducer
};

export const selectHotelsState = createFeatureSelector<HotelsState>('hotels');

export const selectHotelListState = createSelector(
  selectHotelsState,
  (state: HotelsState) => state.hotelList
);

export const selectHotels = createSelector(
  selectHotelListState,
  fromHotelList.getHotels
);
