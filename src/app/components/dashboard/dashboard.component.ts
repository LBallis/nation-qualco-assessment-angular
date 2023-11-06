import { Component, OnInit } from '@angular/core';
import { DashboardDTO } from './dashboard.model';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardList: DashboardDTO[] | undefined;

  constructor(private httpService: HttpService) {
    this.httpService.getDashboardList().subscribe(result => this.dashboardList = result);
  }

  ngOnInit(): void {
  }

}
