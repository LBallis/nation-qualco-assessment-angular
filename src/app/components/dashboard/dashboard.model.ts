
export class DashboardDTO{
  public continentName: string;
  public regionName: string;
  public countryName: string;
  public year: number;
  public population: number;
  public gdp: number;

  constructor(continentName: string,
              regionName: string,
              countryName: string,
              year: number,
              population: number,
              gdp: number,
              ) {
                this.continentName = continentName;
                this.regionName = regionName;
                this.countryName = countryName;
                this.year = year;
                this.population = population;
                this.gdp = gdp;
              }
}
