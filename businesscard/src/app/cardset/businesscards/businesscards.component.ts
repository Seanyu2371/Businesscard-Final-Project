import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { modelcard } from '../modelcard';
import { CardsetService } from '../cardset.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-businesscards',
  templateUrl: './businesscards.component.html',
  styleUrls: ['./businesscards.component.css']
})
export class BusinesscardsComponent implements OnInit, OnDestroy {

  businesscardss:modelcard[];
  subscription:Subscription;
  // name:string;

  constructor(private service: CardsetService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.service.cardsChanged
    .subscribe(
      (bscard:modelcard[]) => {
        this.businesscardss=bscard;
      }
    );
    this.businesscardss=this.service.getBscards();
  }

  onNewBscard() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
