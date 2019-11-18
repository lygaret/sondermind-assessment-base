import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatSelectModule, MatTableModule, MatToolbarModule } from '@angular/material';

import { RootComponent } from './root/root.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { CreditCardIndexPageComponent } from './pages/credit-card-index-page/credit-card-index-page.component';
import { CreditCardCreatePageComponent } from './pages/credit-card-create-page/credit-card-create-page.component';
import { InvoicesPageComponent } from './pages/invoices-page/invoices-page.component';

const routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    component: IndexPageComponent 
  },
  {
    path: 'invoices',
    component: InvoicesPageComponent
  },
  {
    path: 'cards',
    children: [
      {
        path: '',
        component: CreditCardIndexPageComponent,
      },
      {
        path: 'create',
        component: CreditCardCreatePageComponent
      }
    ]
  }
]

@NgModule({
  imports: [ 
    BrowserModule, 
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule
  ],
  declarations: [ 
    RootComponent, 
    IndexPageComponent, 
    CreditCardIndexPageComponent, 
    CreditCardCreatePageComponent, 
    InvoicesPageComponent
  ],
  bootstrap: [
    RootComponent
  ],
  providers: []
})
export class AppModule { }
