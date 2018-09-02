import { Action } from '@ngrx/store';

const ACTIONS_NAMESPACE = 'SEARCH-WIDGET';

// Action Types
export const SEARCH_HOTELS = `${ACTIONS_NAMESPACE} - Search hotels`;

// Actions
export class SearchHotels implements Action {
  readonly type = SEARCH_HOTELS;

  constructor(public payload?: any) {
    console.log('FROM ACTION', payload);
  }
}

export type SearchWidgetAction = SearchHotels;
