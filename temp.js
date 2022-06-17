let ChangeFC=document.getElementById("converter")
let C=document.getElementById("c")
let F=document.getElementById("f")
let ResultConverter=document.querySelector(".result")

let result=0

function change(){


    if(ChangeFC.placeholder=="°C"){

       
       ChangeFC.placeholder="°F"
       C.innerHTML="°F"  
       F.innerHTML="°C"
       document.title="°F to °C"
   
    } else{
       ChangeFC.placeholder="°C"
       C.innerHTML="°C" 
       F.innerHTML="°F"
      document.title="°C to °F"
    }
       
   }
   
   

function convert(){
    if(ChangeFC.value=="" || NaN){  

        ResultConverter.innerHTML="insert correct value"
        ResultConverter.style.color="#993300"

    }else{

   
       if(ChangeFC.placeholder=="°C"){
       
       result=(ChangeFC.value*(9/5))+32   
       ResultConverter.innerHTML=ChangeFC.value+"°C  to " +result+"°F"
       ResultConverter.style.color="rgb(255,255,102)"
       
    
        } else if(ChangeFC.placeholder=="°F"){
       
        result=(ChangeFC.value-32)*(5/9)
        ResultConverter.innerHTML=ChangeFC.value+"°F  to " +result.toFixed(2)+"°C"
        ResultConverter.style.color="rgb(255,255,102)"
      }
    }
}


function reset(){
    ResultConverter.innerHTML=""
    ChangeFC.value=""

}

