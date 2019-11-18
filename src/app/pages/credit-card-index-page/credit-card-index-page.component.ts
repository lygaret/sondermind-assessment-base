import { Component, OnInit } from '@angular/core';
import { CreditCardsService } from '../../services/credit-cards.service';

@Component({
  selector: 'app-credit-card-index-page',
  templateUrl: './credit-card-index-page.component.html',
  styleUrls: ['./credit-card-index-page.component.css']
})
export class CreditCardIndexPageComponent implements OnInit {

  constructor(
    private creditCardsSvc: CreditCardsService
  ) { }

  cards$ = this.creditCardsSvc.list();

  ngOnInit() {
  }

}