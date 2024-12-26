const display = document.querySelector(".display");

function append_display(key){

    display.value=display.value + key;
}

function result()
{

    
   try{
    display.value=eval( display.value );
   }
   catch(error){
    display.value="Error -(";
   }
}

function clear_display()
{
    display.value=" ";
    
}
