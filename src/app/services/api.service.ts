import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get(`${this.api}/all`);
  }

  getCountryByName(name: string) {
    return this.http
      .get(`${this.api}/name/${name.toLowerCase()}`)
      .pipe(map((res) => res));
  }
}
