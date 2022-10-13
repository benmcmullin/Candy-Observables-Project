import { Candy } from './../models/candy.model';
import { PillowCaseService } from './pillow-case.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pillow-case',
  templateUrl: './pillow-case.component.html',
  styleUrls: ['./pillow-case.component.css'],
})
export class PillowCaseComponent implements OnInit {
private pillowCaseServiceSub: Subscription;
  // Create local Subscription

  myCandies: Candy[] = [];

  constructor(private pillowCaseService: PillowCaseService) {}

  ngOnInit(): void {
    this.myCandies = this.pillowCaseService.getMySecretStash();
    this.pillowCaseService.candyListChanged.subscribe(data => {
      this.myCandies=data
    })
    // Subscribe to the Subject on pillowCase and store in a local Subscription
  }
ngOnDestroy() {
  this.pillowCaseServiceSub.unsubscribe();
}

  onEatAllCandy(): void {
    this.pillowCaseService.clearCandy();
  }
}
