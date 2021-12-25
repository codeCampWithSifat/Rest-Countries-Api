fetch ("https://restcountries.com/v2/all")
.then (res => res.json())
.then (data => {
    displayCountries(data);
});

const displayCountries = (countries) => {
    const countriesDiv = document.getElementById("countries");
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement("div");
    //     countryDiv.className = "country";
    //     const countryInfo = `

    //         <h3 class="country-name">${country.name}</h3>
    //         <p>Capital : ${country.capital}</p>
    //     `
    //     countryDiv.innerHTML = countryInfo ;
    //     countriesDiv.appendChild(countryDiv)
    // }
    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.className = "country";
        const countryInfo = `
            <h3 class ="country-name">${country.name}</h3>
            <p>Capital : ${country.capital}</p>
            <button onclick ="displayCountryDetail('${country.name}')">Details</button>
        `
        countryDiv.innerHTML = countryInfo ;
        countriesDiv.appendChild(countryDiv)
        // console.log(country)
    });
};

const displayCountryDetail = (name) => {
    fetch(`https://restcountries.com/v2/name/${name}`)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]))
};

const renderCountryInfo = (country) => {
    // console.log(country)
    const countryDetails = document.getElementById("countryDetails");
    countryDetails.innerHTML = `
        <h2>Name : ${country.name} </h2>
        <p>Population : ${country.population}</p>
        <p>Region : ${country.region}</p>
        <p>NativeName : ${country.nativeName}</p>
        <img src ="${country.flag}">
    `
    

}