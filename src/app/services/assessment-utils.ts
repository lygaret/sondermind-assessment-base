import { Observable, of, timer, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const errors = [
  "Haxx0r ipsum mountain dew firewall data terminal stdio.h",
  "D00dz var perl throw mainframe d00dz sudo",
  "I recommend we transfer power to phasers and arm the photon torpedoes."
];

export interface BuildOpts {
  timeSpan: number;
  errorRate: number;
}

export function buildObservable<T>(value: T, opts: Partial<BuildOpts> = {}): Observable<T> {
  opts = { timeSpan: 500, errorRate: 0.5, ...opts };

  return timer(opts.timeSpan).pipe(
    switchMap(() => {
      if (Math.random() <= opts.errorRate) {
        const errorIdx = Math.min(Math.floor(Math.random() * errors.length), errors.length - 1);
        return throwError(errors[errorIdx]);
      } else {
        return of(value);
      }
    })
  );
}

export function throwObservable<T, E>(error: E, opts: Partial<BuildOpts> = {}): Observable<T> {
  opts = { timeSpan: 500, errorRate: 0.5, ...opts };

return timer(opts.timeSpan).pipe(
      switchMap(() => throwError(error))
  );
};