import { Component, OnInit } from '@angular/core';
import { Theme, ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  theme!: Observable<Theme>;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.theme = this.themeService.mode$;
  }
}
