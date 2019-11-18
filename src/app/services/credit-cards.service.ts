import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { buildObservable, throwObservable, BuildOpts } from './assessment-utils';

export interface CreditCard {
  id: number;
  nickname: string;
  last_4: string;
}

export interface CreditCardForm {
  nickname: string;
  cardholders_first_name: string;
  cardholders_last_name: string;
  billing_zip: string;
  card_number: string;
}

export type FormErrors = { [key: string]: string[] };

const storage: CreditCard[] = [
  { id: 0, nickname: 'Discretionary Spending', last_4: '1234' },
  { id: 1, nickname: 'HSA Spending', last_4: '9988' },
]

@Injectable({
  providedIn: 'root'
})
export class CreditCardsService {

  constructor() { }

  list(): Observable<CreditCard[]> {
    return buildObservable(storage, { errorRate: 0 });
  }

  save(form: CreditCardForm): Observable<CreditCard> {
    const errors = this.validateForm(form);
    if (errors) {
      return throwObservable(errors);
    }

    const row: CreditCard = { id: storage.length, nickname: form.nickname, last_4: form.card_number.slice(12) }
    return buildObservable(row, { errorRate: 0.2 })
      .pipe(
        tap(() => storage.push(row))
      );
  }

  private validateForm(form: CreditCardForm): FormErrors | null {
    const errors: FormErrors = {};
    let hasErrors = false;

    if (form.nickname == null || !(typeof form.nickname === 'string') || form.nickname.length < 1) {
      errors['nickname'] = ['must be present.'];
      hasErrors = true;
    }

    if (form.cardholders_first_name == null || !(typeof form.cardholders_first_name === 'string') || form.cardholders_first_name.length < 1) {
      errors['cardholders_first_name'] = ['must be present.'];
      hasErrors = true;
    }
    
    if (form.cardholders_last_name == null || !(typeof form.cardholders_last_name === 'string') || form.cardholders_last_name.length < 1) {
      errors['cardholders_last_name'] = ['must be present.'];
      hasErrors = true;
    }

    if (form.billing_zip == null || !(typeof form.billing_zip === 'string') || !form.billing_zip.match(/\d{5}/)) {
      errors['billing_zip'] = ['is invalid'];
      hasErrors = true;
    }

    if (form.card_number == null || !(typeof form.card_number === 'string') || !form.card_number.match(/\d{16}/)) {
      errors['card_number'] = ['is invalid'];
      hasErrors = true;
    }

    return hasErrors ? errors : null;
  }

}