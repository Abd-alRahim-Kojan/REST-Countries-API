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
  countryData: any = {};

  constructor(private apiService: ApiService, private router: ActivatedRoute) {
    const nameParam = this.router.snapshot.paramMap.get('name');
    this.name = nameParam ? String(nameParam) : '';
  }

  ngOnInit() {
    this.getCountryName(this.name);
  }

  getCountryName(name: string) {
    this.apiService.getCountryByName(name).subscribe({
      next: (res) => {
        console.log(typeof res);

        this.countryData = res;
        console.log(this.countryData);
        console.log(this.countryData.name.common);
        
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
