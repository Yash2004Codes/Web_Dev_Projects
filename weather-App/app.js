

const apikey =`654f10758321968e0f40759ca7c456d1`;
const weatherForm=document.querySelector(".weatherForm");
const cityInput =document.querySelector(".cityInput");
const card =document.querySelector(".card");



weatherForm.addEventListener("submit",async event=>
{
  event.preventDefault();
  const city = cityInput.value ;

  if(city){
       try{
const weatherData = await getWeatherData(city);
displayWeatherInfo(weatherData);
       }
       catch(error){
        console.log(error);
        displayError(error);
       }
  }
  else{
    displayError("please enter a city");
  }
}
);

async function getWeatherData(city){
const apiurl = ``;
}

function displayWeatherInfo(data)
{
    // data in json format
}

function getWeatherEmoji(weatherId){

}

function displayError(message){
    const errorDisplay = document.querySelector();
    errorDisplay.textContent = message;
}
