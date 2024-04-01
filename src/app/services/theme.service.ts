import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private mode: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(
    Theme.Light
  );
  constructor() {}

  get mode$() {
    return this.mode.asObservable();
  }

  toggleMode(): void {
    if (this.mode.value === Theme.Light) {
      this.mode.next(Theme.Dark);
    } else {
      this.mode.next(Theme.Light);
    }
  }
}
