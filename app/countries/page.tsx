import CountriesItem from "@/components/countries-item";
import axios from "axios";

function sortByName(a: Country, b: Country): number {
    return a.name.common.localeCompare(b.name.common);
}

async function fetchCountries(): Promise<Country[]> {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
}

export default async function Countries() {
    
    const countries = (await fetchCountries())
        .slice()
        .sort(sortByName);

    return (
        <div id="countries-container">
            {countries.map(country => <CountriesItem data={country}></CountriesItem>)}
        </div>
    );
}