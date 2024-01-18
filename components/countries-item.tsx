'use client'

import { Divider, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function CountriesItem(params: { data: Country }) {
    
    if (params && params.data)
    {
        const data = params.data;
        const countryCurrencies: string[] = [];

        if (data.currencies) {
            Object.entries(data.currencies).forEach(([key, value]) => countryCurrencies.push(value.name));
        }
        else
        {
            countryCurrencies.push('N/A');
        }

        if (data.region) {
            data.isAsian = data.region.includes("Asia");
        }

        if (data.languages) {
            data.isFrancophonie = Object.entries(data.languages).find(([key, value]) => key == "fra") != null;
        }

        return (
            <Flex flexDirection="row" flexWrap={"nowrap"} className="country-list-item">
                <Flex flexDirection={"column"} flex={3}>
                    <Flex flexDirection="row">
                        <Flex flexDirection={"column"}>
                            <Flex flexDirection={"row"}><strong>Capital(s): </strong></Flex>
                            <Divider />
                            <Flex flexDirection={"row"}><strong>Population: </strong></Flex>
                            <Divider />
                            <Flex flexDirection={"row"}><strong>Currency: </strong></Flex>
                        </Flex>
                        
                        <Flex flexDirection={"column"} className="w-auto">
                            <Flex flexDirection={"row"}><span>{ data.capital?.join(', ') }</span></Flex>
                            <Divider />
                            <Flex flexDirection={"row"}><span>{ data.population }</span></Flex>
                            <Divider />
                            <Flex flexDirection={"row"}>{ countryCurrencies.map(currency => <span>{ currency }</span>) }</Flex>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex flexDirection={"column"} className="flag-container">
                    <Image className="flag" loading="lazy" width={70} height={70} alt={data.flags.alt} src={data.flags.png}></Image>
                    <span>{ data.name.common }</span>
                </Flex>

                <Flex flexDirection={"column"}>
                    <Flex flexDirection={"row"}>
                        <div hidden={!data.isFrancophonie}>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="Bugatti" src="https://www.carlogos.org/logo/Bugatti-logo-640x327.jpg"></Image>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="DS" src="https://www.carlogos.org/logo/DS-logo-2009-640x486.jpg"></Image>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="Renault" src="https://www.carlogos.org/logo/Renault-logo-2015-640x550.jpg"></Image>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="Peugeot" src="https://www.carlogos.org/logo/Peugeot-logo-2010-640x451.jpg"></Image>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="Citroen" src="https://www.carlogos.org/logo/Citroen-logo-2009-640x550.jpg"></Image>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="Alpine" src="https://www.carlogos.org/logo/Alpine-logo-640x341.jpg"></Image>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="PGO" src="https://www.carlogos.org/logo/PGO-logo-640x550.jpg"></Image>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="Venturi" src="https://www.carlogos.org/logo/Venturi-logo-640x151.png"></Image>
                        </div>
                        <div hidden={!data.isAsian}>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="Toyota" src="https://www.carlogos.org/car-logos/toyota-logo-2020-europe-640.png"></Image>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="Honda" src="https://www.carlogos.org/car-logos/honda-logo-2000-full-640.png"></Image>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="Subaru" src="https://www.carlogos.org/car-logos/subaru-logo-2019-640.png"></Image>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="Nissan" src="https://www.carlogos.org/car-logos/nissan-logo-2020-black-show.png"></Image>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="Mazda" src="https://www.carlogos.org/car-logos/mazda-logo-2018-vertical-640.png"></Image>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="Mitsubishi" src="https://www.carlogos.org/logo/Mitsubishi-logo-640x550.jpg"></Image>
                            <Image className="car-manuactories" loading="lazy" width={20} height={20} alt="Suzuki" src="https://www.carlogos.org/logo/Suzuki-logo-640x285.jpg"></Image>
                        </div>
                    </Flex>
                </Flex>
            </Flex>
        )
    }

}
