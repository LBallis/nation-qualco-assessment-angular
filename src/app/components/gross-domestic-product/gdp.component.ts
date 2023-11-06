import { Component, OnInit } from '@angular/core';
import { GrossDomesticProduct } from './gdp.model';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-gdp',
  templateUrl: './gdp.component.html',
  styleUrls: ['./gdp.component.css']
})
export class GdpComponent implements OnInit {
  gdpList: GrossDomesticProduct[] | undefined;

  constructor(private httpService: HttpService) {
    this.httpService.getGrossDomesticProducts().subscribe(result => this.gdpList = result);
  }

  ngOnInit(): void {
  }

}
