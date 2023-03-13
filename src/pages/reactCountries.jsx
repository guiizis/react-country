import { useState } from "react";
import { Countries } from "../components/Countries";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import { allCountries } from "../data/countries";

export function ReactCountriesPages() { 
  const [countryFilter, setCountryFilter] = useState('Brazil')

  function handleCountryChange(value){
    console.log(value)
    setCountryFilter(value)
  }

  const filteredCountries = countryFilter.trim().length >= 3 ?
   allCountries.filter(({nameLowerCase}) => nameLowerCase.includes(countryFilter))
   :
   allCountries

  return (
    <div>
      <Header>react-countries</Header>
      <Main>
        <TextInput 
        labelDescription="informe o nome do país (ao menos 3 caracteres)" 
        autoFocus 
        id="inputCountryFilter"
        inputValue={countryFilter}
        onInputChange={handleCountryChange}
        />
        <Countries>{filteredCountries}</Countries>
      </Main>
    </div>
  )
}