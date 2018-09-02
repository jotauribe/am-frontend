import { Hotel } from '../../models/hotel.model';
import * as fromHotels from '../actions/hotelList.actions';

export interface State {
  data: Hotel[];
  loaded: boolean;
  loading: boolean;
}

const initialState: State = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromHotels.Actions
): State {
  switch (action.type) {
    case fromHotels.FETCH_HOTELS:
      return {
        ...state,
        loading: true
      };
    case fromHotels.FETCH_HOTELS_DONE:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true
      };
    case fromHotels.FETCH_HOTELS_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export const getHotelsLoading = (state: State) => state.loading;
export const getHotelsLoaded = (state: State) => state.loaded;
export const getHotels = (state: State) => state.data;
