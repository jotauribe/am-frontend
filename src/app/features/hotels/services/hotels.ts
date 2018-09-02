import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Hotel } from '../models';

@Injectable()
export class HotelsService {
  constructor(private http: HttpClient) {}

  fetchHotels({ stars, name }): Observable<Hotel[]> {
    console.log('stars from service ', stars, 'name from service ', name);
    const nameFilter = name ? `name=${name}` : '';
    const starsFilter = stars ? `&stars=${stars.join(',')}` : '';
    const queryUrl = `http://localhost:3000/api/hotel?${nameFilter}${starsFilter}`;

    return this.http.get<Hotel[]>(queryUrl);
  }

  fetchAllHotels(): Observable<Hotel[]> {
    const queryUrl = `http://localhost:3000/api/hotel`;

    return this.http.get<Hotel[]>(queryUrl);
  }
}
