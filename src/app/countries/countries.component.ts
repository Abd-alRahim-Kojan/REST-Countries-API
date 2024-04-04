import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
})
export class CountriesComponent {
  countries: any;
  countryDatas: any;
  searchValue: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getCountreis();
  }

  private getCountreis() {
    this.apiService.getAllCountries().subscribe({
      next: (res) => {
        this.countries = res;
      },
    });
  }

  onSearchChange() {
    if (this.searchValue === null) {
      this.getCountreis();
    } else {
    }
  }
}
