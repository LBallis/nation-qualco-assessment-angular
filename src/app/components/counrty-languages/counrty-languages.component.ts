import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { Language } from './language.model';

@Component({
  selector: 'app-counrty-languages',
  templateUrl: './counrty-languages.component.html',
  styleUrls: ['./counrty-languages.component.css']
})
export class CounrtyLanguagesComponent implements OnInit {
  countryName: string | null | undefined;
  languages: Language[] | undefined;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.httpService.getLanguages(Number(this.route.snapshot.paramMap.get('countryId'))).subscribe(result => this.languages = result);
  }

  ngOnInit(): void {
    this.countryName = this.route.snapshot.paramMap.get('countryName');

  }

}
