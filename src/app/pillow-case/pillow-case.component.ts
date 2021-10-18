import { Candy } from './../models/candy.model';
import { PillowCaseService } from './pillow-case.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pillow-case',
  templateUrl: './pillow-case.component.html',
  styleUrls: ['./pillow-case.component.css'],
})
export class PillowCaseComponent implements OnInit, OnDestroy {
  private updatedCandiesSub: Subscription;

  myCandies: Candy[] = [];

  constructor(private pillowCaseService: PillowCaseService) {}

  ngOnInit(): void {
    this.myCandies = this.pillowCaseService.getMySecretStash();
    this.updatedCandiesSub =
      this.pillowCaseService.candiesHaveChanged.subscribe((candies) => {
        this.myCandies = candies;
      });
  }

  ngOnDestroy(): void {
    this.updatedCandiesSub.unsubscribe();
  }

  onEatAllCandy(): void {
    this.pillowCaseService.clearCandy();
  }
}
