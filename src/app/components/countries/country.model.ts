
export class Country{
  public countryId: number;
  public name: string;
  public area: string;
  public nationalDay: string;
  public countryCode2: string;
  public countryCode3: string;
  public regionId: number;

  constructor(countryId: number,
              name: string,
              area: string,
              nationalDay: string,
              countryCode2: string,
              countryCode3: string,
              regionId: number,
              language: []) {
                this.countryId = countryId;
                this.name = name;
                this.area = area;
                this.nationalDay = nationalDay;
                this.countryCode2 = countryCode2;
                this.countryCode3 = countryCode3
                this.regionId = regionId;

              }
}
