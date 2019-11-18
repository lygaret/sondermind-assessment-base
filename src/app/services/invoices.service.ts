
import { Injectable } from '@angular/core';
import { buildObservable, BuildOpts } from './assessment-utils';

export interface Invoice {
  date: Date;
  service: string;
  cost: number;
}

const storage = [
  { date: new Date(2019, 10, 15), service: '90 minute session', cost: 75.0 },
  { date: new Date(2019, 10, 30), service: '60 minute session', cost: 61.0 },
  { date: new Date(2019, 11, 10), service: '60 minute session', cost: 61.0 }
];

@Injectable({ providedIn: 'root' })
export class InvoicesService {
  
  list() {
    return buildObservable(storage, { errorRate: 0 });
  }

}