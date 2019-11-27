import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { DataStorageService } from '../shared/data-storage.service';
import { modelcard } from './modelcard';
import { CardsetService } from './cardset.service';

@Injectable({ providedIn: 'root' })
export class CardResolverService implements Resolve<modelcard[]> {
  constructor(
    private dataService: DataStorageService,
    private cardService: CardsetService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const bscards = this.cardService.getBscards();

    if (bscards.length === 0) {
      return this.dataService.fetchBscards();
    } else {
      return bscards;
    }
  }
}
