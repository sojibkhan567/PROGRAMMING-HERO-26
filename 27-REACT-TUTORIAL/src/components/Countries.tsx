import { use } from 'react'
import type { CountryType } from '../type'

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    const countries = use(countriesPromise)
    return (
        <div>
            <h2>Countries</h2>
            <ol>
                {countries.map((country) => (
                    <li key={country.ccn3.ccn3}>{country.name.common} - {country.name.official}</li>
                ))}
            </ol>
        </div>
    )
}

