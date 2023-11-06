import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Country } from './country.model';
import { HttpService } from '../../service/http.service';




@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})

export class CountriesComponent implements OnInit,AfterViewInit {
  countries: Country[] | undefined;

  constructor(private httpService: HttpService) {
    this.httpService.getCountries().subscribe(result => this.countries = result);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }
}
