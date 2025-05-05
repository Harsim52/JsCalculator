const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

buttons.forEach(btn=>{
const value = btn.textContent
    btn.addEventListener("click", ()=>{
        
        if(value === "AC"){
            display.value = "";
        } else if( value ===  "="){
            try{ display.value = eval(display.value);}
            catch(error){
                display.value = "Error";
            }
        } else{
            display.value += value;
        }
    }
)
})