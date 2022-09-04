// const baseUrl = 'https://restcountries.eu/rest/v2/name/';

// export default {
//   fetchArticles(query) {
//     const requestParams = `${query}`;
//     return fetch(baseUrl + requestParams).then(res => res.json());
//   },
// };

// const url = 'https://restcountries.com/v3.1/name/';
// const fields = '?fields=name,capital,population,flags,languages';

// export function fetchCountries(name) {

//   return fetch(`${url}${name}${fields}`)
//     .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// }





// 2222222222222222222
// const BASE_URL = 'https://restcountries.com/v3.1/name/'

// const fields = 'fields=name,capital,population,flags,languages'

// export function fetchCountries(name) {
//   return fetch(`${BASE_URL}${name}?${fields}`)
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }

// REPETA

fetch("https://restcountries.com/v3.1/name/")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });




// const refs = {
//   searchForm: document.querySelector ('search-box'),
// }

// refs.searchForm.addEventListener('submit', onSearch);

// // function fetchCountries(https://restcountries.com/v2/all?fields=name.official, capital,population,flags.svg,languages)


// function onSearch(e) {
//   e.preventDefault();


// const url =
//   'https://restcountries.com/v3.1/name/';
// fetch(url)
//   .then(response =>
//  response.json())
//     .then(console.log);
//         }















// const searchQuery = e.currentTarget.elements.query.value 

//         .then(response => {
             
//         return response.json();
//         })
  
//   .then (r=> r.json())
        
//         .then(countries => {
//           console.log(countries);
//           const markup = countries
//         })
//   .catch(error => {
//     console.log(error);
//   })
        
//   .then(r => r.json())
//     .then(console.log);




