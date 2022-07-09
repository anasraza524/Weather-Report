
function weather() {

    let message = document.querySelector('#message')

    
   
    // get city name
    const city = document.querySelector("#city").value;

    axios.get(`https://api.weatherapi.com/v1/current.json?key=dea9a8b59f5c489a99e183024220707&q=${city}`)
        .then(function (response) {
            // handle success
            const data = response.data;
            console.log(data);

 document.querySelector('.city').innerHTML = "Weather in "+ data.location.name  ;
 document.querySelector('.temp').innerHTML =  data.current.temp_c + " °C" ;
 let icon = data.current.condition.icon;
            icon.replace("/file// ");
            document.querySelector(".icon").src = `https:${icon}`; 
            document.querySelector('.description').innerHTML =data.current.condition.text ;
            document.querySelector('.regon').innerHTML = data.location.region + ",  " + data.location.country + ".";
            document.querySelector('.humidity').innerHTML ="Humidity: "+data.current.humidity + " %" ;
            document.querySelector('.wind').innerHTML = "Wind Speed: " + data.current.wind_kph + " km/h" ;
            
            
           
        })
                                                                                                                                            


        if (isNaN(city)) {
         document.querySelector("#hidden_weather").classList.remove("weather_loading");
                      
                     }
             else {
alert("Enter a City Name");
  
                        
         }
//          let wrongcity = data.location.name ;
// if(city != wrongcity){
//     alert("Invalid City Name");}
//   else {
// alert("Right CIty")
// }
}      
        


