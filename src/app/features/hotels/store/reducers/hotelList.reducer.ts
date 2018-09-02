import { Hotel } from '../../models/hotel.model';
import * as fromHotels from '../actions/hotelList.actions';

export interface State {
  data: Hotel[];
  loaded: boolean;
  loading: boolean;
}

const initialState: State = {
  data: [
    {
      id: '249942',
      name: 'Hotel Stefanos',
      stars: 3,
      price: 994.18,
      image: '4900059_30_b.jpg',
      amenities: [
        'safety-box',
        'nightclub',
        'deep-soaking-bathtub',
        'beach',
        'business-center'
      ]
    },
    {
      id: '161901',
      name: 'Hotel Santa Cruz',
      stars: 3,
      price: 1267.57,
      image: '6623490_6_b.jpg',
      amenities: [
        'nightclub',
        'business-center',
        'bathtub',
        'newspaper',
        'restaurant'
      ]
    },
    {
      id: '161914',
      name: 'NM Lima Hotel',
      stars: 4,
      price: 1445.5,
      image: '981018_26_b.jpg',
      amenities: [
        'business-center',
        'nightclub',
        'deep-soaking-bathtub',
        'fitness-center',
        'garden'
      ]
    }
  ],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromHotels.Actions
): State {
  console.log(action.payload);
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
