type CountryName = {
    common: string,
    official: string,
    nativeName: Map<string, CountryName>
}