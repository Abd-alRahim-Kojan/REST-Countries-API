import { Component, HostBinding, effect, signal } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  theme: string = 'light';
  activeDark: boolean = false;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleMode();
    this.getCurrentTheme();
  }

  getCurrentTheme() {
    this.themeService.mode$.subscribe((theme) => {
      this.theme = theme;
    });
    this.theme === 'light'
      ? (this.activeDark = false)
      : (this.activeDark = true);
  }
}
