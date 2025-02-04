import { Injectable } from '@angular/core';
import { Candy } from '../models/candy.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandyStoreService {
  candyBag = new Subject<Candy[]>()
  // Create a new "Subject" that emits the list when a new delivery occurs

  private candiesForSale: Candy[] = [
    new Candy('Milky Way', 1),
    new Candy('Snickers', 2),
    new Candy('Twix', 1.5),
    new Candy('Skittles', 3),
    new Candy('M&M', 4),
  ];

  getCandiesForSale() {
    return this.candiesForSale.slice();
  }

  addFiveCandies() {
    this.candiesForSale.push(
      new Candy('Milky Way', 1),
      new Candy('Snickers', 2),
      new Candy('Twix', 1.5),
      new Candy('Skittles', 3),
      new Candy('M&M', 4)
    );
    this.candyBag.next(this.candiesForSale);
  }
}
