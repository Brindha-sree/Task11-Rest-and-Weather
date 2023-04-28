var restapi = "https://restcountries.com/v3.1/all";
var weather = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=2faa146a4a31a57667ff4f694a7a95e2";
var fet = fetch(restapi)
  .then((response) => response.json())
  .then((data) => {
    
    data.map((value) => {
      var spreadOperator = {
        ...value,
        name: value.name.common,
        flag: value.flags.png,
        code: value.cioc,
        capital: value.capital,
        region: value.region,
        population: value.population,
        latitude: value.latlng[0],
        longitude: value.latlng[1]

      };
      api(spreadOperator);
      
      
     
         console.log(value)
    })
  })
function api({ name, flag, code, capital, region, population,latitude,longitude }) {
   
  document.body.innerHTML += 
   ` <div class="cards">
    <h2 id="title" class="text-center">${name}</h2>
    <img src="${flag}" class="flag" alt="${name}'Flag image">
 
  <div class="cards-body car" >
  <p><span>Country Code :</span>${code}</p>
  <p><span>Population :</span>${population}</p>
  <p><span>Captial :</span> ${capital}</p>
  <p><span>Region :</span> ${region}</p>
  <p><span>latitude:</span>${latitude}</p>
  <p><span>longitude: </span>${longitude}</p>

  <a href="#" class="btn btn-primary" onclick=(block(${latitude},${longitude},${name})) >Click Weather</a>
 <div id=${name}>   </div>
  
</div>
</div>
`
}



function wapi(lat,lng,name){

  var apiweather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=06e423ec0af839c485470951f60c3f6b`
   
  console.log(name)
 fetch(apiweather)
 .then((response) => response.json())
 .then((data)=> {

     alert(`
               For ${name.id}  
     Current Humidity is ${data.main.humidity}
     Current Pressure is ${data.main.pressure}
     Current Temperature is ${data.main.temp}`)
    })
}
  
document.addEventListener("click",(event) => event.preventDefault())
