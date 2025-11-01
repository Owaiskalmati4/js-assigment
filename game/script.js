let secret = prompt("choose a one number  1 to 10" )
let num = 5


if(secret==num){
    console.log("Bingo!Correct Answer")
}

else if(secret == 4 ||secret == 6){
    console.log  ("close enough to the correct answer");
}



else{
     console.log  ("Try again");
}




let userage = prompt("Enter Your age")


if(userage=>17){
    console.log("You are adult");
    
}


else if(userage<=18){
    console.log("You are not adult");
}



let owais=prompt("Guess My age ")

if(owais==21){
       console.log("Your Age is Correct");
}


else{
     console.log("Your Age is not Correct");
}


let onais = prompt("Enter your Onais GF name")


if(onais=="Dua" ||onais=="dua" ||onais=="jannat" ||onais=="zulaika"){
    console.log( onais , "is a correct answer")
}

else{
    console.log("wrong")
}