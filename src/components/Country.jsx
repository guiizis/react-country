export function Country({ children: country = null }) {
  // console.log(country)
  if (!country) {
    return (
      <div>not found</div>
    )
  }

  const {name, capital, population, area, flag} = country

  return (
    <div className="border p-2 m-2 flex flex-row items-center space-x-2">
      <img  className="w-48" src={flag} alt={name} />
      <ul>
        <li>Nome: {name}</li>
        <li>Capital: {capital}</li>
        <li>População: {population}</li>
        <li>Area: {area}</li>
      </ul>
    </div>
  )
}