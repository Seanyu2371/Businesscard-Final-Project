import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { CardsetService } from '../cardset/cardset.service';
import { modelcard } from '../cardset/modelcard';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private service: CardsetService, private authService: AuthService) {}

  storeBscards() {
    const bscards = this.service.getBscards();
    this.http
      .put(
        'https://businesscard-1d6c9.firebaseio.com/cardset.json',
        bscards
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchBscards() {
    return this.http
      .get<modelcard[]>('https://businesscard-1d6c9.firebaseio.com/cardset.json')
      .pipe(
        map(bscards => {
          return bscards.map(bscard => {
            return {
              ...bscard
            };
          });
        }),
        tap(bscards => {
            this.service.setBscards(bscards);
        })
      )
  }
}
