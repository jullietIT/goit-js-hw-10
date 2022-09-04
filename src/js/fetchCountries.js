
// export const refs = {
//   searchBox: document.getElementById('search-box'),
//   countryList: document.querySelector('ul.country-list'),
//   countryInfo: document.querySelector('div.country-info'),
// };


// searchBox.addEventListener( ('search-box'), () => {
//   fetchCountry()
//     .then((country) => rendercountryList(country))
//     .catch((error) => console.log(error));
// });

// function fetchCountry() {
//   return fetch("https://restcountries.com/v3.1/name/{name}")
//     .then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function rendercountryList(names) {
//   const markup =names
//     .map((country) => {
//       return `<li>
//           <p><b>Name</b>: ${country.capital}</p>
//           <p><b>Email</b>: ${country.population}</p>
//           <p><b>Company</b>: ${country.flags.svg}</p>
//         </li>`;
//     })
//     .join("");
//   countryList.innerHTML = markup;
// }












// const BASE_URL = 'https://restcountries.com/v3.1/name/'
// const fields = 'fields=name,capital,population,flags,languages'

// export function fetchCountries(name) {
//   return fetch(`${BASE_URL}${name}?${fields}`)
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }





export const fetchCountries = name => {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=,name,capital,population,flags,languages`
  )
      .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
};