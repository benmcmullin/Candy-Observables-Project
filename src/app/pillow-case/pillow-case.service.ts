import { Candy } from './../models/candy.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PillowCaseService {
  // Create a "Subject" that to emit when a new candy is added to bag

  private myCandies: Candy[] = [new Candy('Kit Kat'), new Candy('Pop Rocks')];

  getMySecretStash() {
    return this.myCandies.slice();
  }

  addNewCandy(name: string) {
    this.myCandies.push(new Candy(name));
    console.log('this.myCandies:', this.myCandies);
  }

  newCandyAdded = new Subject<Candy[]>()

  clearCandy() {
    this.myCandies = [];
  }
}
