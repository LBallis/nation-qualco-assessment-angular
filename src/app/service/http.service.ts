import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Country } from '../components/countries/country.model';
import { Language } from '../components/counrty-languages/language.model';
import { GrossDomesticProduct } from '../components/gross-domestic-product/gdp.model';
import { DashboardDTO } from '../components/dashboard/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Country[]>('http://localhost:8080/countries');
  }

  getLanguages(countryId: number) {
    let queryParams = new HttpParams().append("countryId",countryId);
    return this.http.get<Language[]>('http://localhost:8080/countries/languages',{params:queryParams});
  }

  getGrossDomesticProducts() {
    return this.http.get<GrossDomesticProduct[]>('http://localhost:8080/countries/gross-domestic-product');
  }

  getDashboardList() {
    return this.http.get<DashboardDTO[]>('http://localhost:8080/countries/dashboard');
  }
}
