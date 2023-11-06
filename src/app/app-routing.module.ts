import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounrtyLanguagesComponent } from './components/counrty-languages/counrty-languages.component';
import { CountriesComponent } from './components/countries/countries.component';
import { GdpComponent } from './components/gross-domestic-product/gdp.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'countries' , component: CountriesComponent},
  {path: 'countries/country-languages/:countryId/:countryName', component: CounrtyLanguagesComponent},
  {path: 'gdp', component: GdpComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
