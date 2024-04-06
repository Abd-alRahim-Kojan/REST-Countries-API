import { Component, input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
})
export class CountryComponent {
  // @input()
  name: string = '';
  countryData: any;

  constructor(private apiService: ApiService, private router: ActivatedRoute) {
    const nameParam = this.router.snapshot.paramMap.get('name');
    this.name = nameParam ? String(nameParam) : '';
  }

  ngOnInit() {
    this.getCountryName(this.name);
  }

  getCountryName(name: string) {
    this.apiService.getCountryByName(name).subscribe({
      next: (res: Object) => {
        console.log(typeof res); // this return object

        this.countryData = (res as any[])[0]; // Assign the first element of the response array
        console.log(this.countryData);
        console.log(typeof this.countryData); // this return object
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  getCurrencyNames() {
    return Object.values(
      (this.countryData?.currencies || {}) as { [key: string]: any }
    );
  }
}
