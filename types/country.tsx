type Country = {
  name: CountryName,
  currencies: Map<string, Currency>
  capital: string[],
  region: string,
  subregion: string,
  languages: Map<string, string>,
  population: number,
  continents: string[],
  flags: CountryFlag,

  // Auxiliar properties
  isAsian: boolean,
  isFrancophonie: boolean
}