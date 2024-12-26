

const textbox = document.querySelector("#textbox");
const tofar = document.querySelector("#tofar");
const tocel = document.querySelector("#tocel");
const result = document.querySelector("#result");
let temp;

function convert(event)
{
    event.preventDefault(); // prevents page from reloading
    
    temp = textbox.value;

    console.log(`tofar= ${tofar.checked}`);
    console.log(`tocel=${tocel.checked}`);


    if(tofar.checked)
    {
      temp = temp*9/5 + 32;
      result.textContent= temp + "Farenheit";
    }
    else if(tocel.checked)
    {
      temp = (temp-32)*5/9;
      result.textContent= temp + "Celcius";

    }
    else{
        result.textContent="Plz select an option !";
    }
}