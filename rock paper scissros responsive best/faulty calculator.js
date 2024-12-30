function calculator(a,b, operator){

    let ranNUm = randNum()

    console.log("random num is " , ranNUm)

  
    if(ranNUm <=10){
        if(operator == "+") {
            console.log(a-b)
        }
        else if(operator == "-") {
            console.log(a*b)
        }
        else if(operator == "*") {
            console.log(a/b)
        }
        else if(operator == "/") {
            console.log(a+b)
        }
        
        
    } else{

        if(operator == "+") {
            console.log(a+b)
        }
        else if(operator == "-") {
            console.log(a-b)
        }
        else if(operator == "*") {
            console.log(a*b)
        }
        else if(operator == "/") {
            console.log(a/b)
        }
    }


}


function randNum() {
    result = Math.floor(Math.random()*100)+1
    return result
}

calculator(1,1,"+")