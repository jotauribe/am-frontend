import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Hotel } from '../models';

@Injectable()
export class HotelsService {
  constructor(private http: HttpClient) {}

  fetchHotels({ stars, name }): Observable<Hotel[]> {
    const queryUrl = `http://localhost:3000/api/hotel?name${name}&stars${stars}`;

    return this.http.get<Hotel[]>(queryUrl);
  }

  fetchAllHotels(): Observable<Hotel[]> {
    const queryUrl = `http://localhost:3000/api/hotel`;

    return this.http.get<Hotel[]>(queryUrl);
  }
}
