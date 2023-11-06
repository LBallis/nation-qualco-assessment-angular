import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CounrtyLanguagesComponent } from './components/counrty-languages/counrty-languages.component';
import { GdpComponent } from './components/gross-domestic-product/gdp.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CounrtyLanguagesComponent,
    GdpComponent,
    DashboardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
