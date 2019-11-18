import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../../services/invoices.service';
import { CreditCardsService } from '../../services/credit-cards.service';

@Component({
  selector: 'app-invoices-page',
  templateUrl: './invoices-page.component.html',
  styleUrls: ['./invoices-page.component.css']
})
export class InvoicesPageComponent implements OnInit {

  constructor(
    private invoicesSvc: InvoicesService,
    private cardsSvc: CreditCardsService
  ) { }

  cards$    = this.cardsSvc.list();
  invoices$ = this.invoicesSvc.list();
  columns = ['date', 'service', 'cost'];

  ngOnInit() {
  }

}