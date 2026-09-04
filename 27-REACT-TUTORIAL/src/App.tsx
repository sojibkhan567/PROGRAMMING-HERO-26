import { Suspense } from 'react'
import './App.css'
import type { CountryType } from './type'
import Countries from './components/Countries'


const countriesPromise = async (): Promise<CountryType[]> => {
  const response = await fetch('https://openapi.programming-hero.com/api/all')
  const data = await response.json()
  return data.countries;
}


function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Countries countriesPromise={countriesPromise()} />
      </Suspense>
    </>
  )
}

export default App
