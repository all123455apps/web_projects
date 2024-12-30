const theme = document.querySelector(".buttons :nth-child(1)")
const reset = document.querySelector(".buttons :nth-child(2)")
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const user = document.querySelector(".user :nth-child(1)")
const comp = document.querySelector(".comp :nth-child(1)")
const msgDiv = document.querySelector(".msg")
const message= document.querySelector(".message")
const body= document.querySelector("body") 
const main= document.querySelector(".main") 

// js pure variable
let nowTheme = "light"
let userScore = 0
let compScore= 0

let userRock 
let userPaper  

let userScissors

let userChoice
let compChoice



// change theme
theme.addEventListener( "click" , (e) => {
    
    nowTheme = nowTheme == "light" ? "dark" : "light"
    console.log(e.target)
    
    // let color = nowTheme == "light" ? ".dark" : "remove"
    // body.classList.add("dark")
    
    nowTheme == "dark" ? body.classList.add("dark") : body.classList.remove("dark")

    nowTheme == "dark" ? theme.classList.add("design-btn") : theme.classList.remove("design-btn")

    nowTheme == "dark" ? reset.classList.add("design-btn") : reset.classList.remove("design-btn")

} )

reset.addEventListener("click" , (e) => {

    message.style.backgroundColor = "rgb(27, 27, 93)"

    userScore = 0
    compScore = 0
    user.innerText =   `${userScore}`
    comp.innerText =   `${compScore}`
})



    
    
    main.addEventListener("click" , (e) => {

    let box = e.target.closest(".box")
    
    
    if(box) {
        
        const element = box.querySelector(":nth-child(2)")

         userChoice = element ? element.textContent : "null"

    }

    compChoice = computer()
   
    
    calculation()
    updateDom()
    
})

// }


// comp choice generate

function computer () {

    const array = ["Rock" , "Paper" , "Scissors"]
    const index =  Math.floor(Math.random() *3)

    return array[index]
}



let result
// calculation


function calculation() {
const outCome = {

    "RockRock" :          "draw",
    "RockPaper" :         "lose",
    "RockScissors" :       "win",
    "PaperRock" :          "win",
    "PaperPaper" :         "draw",
    "PaperScissors" :      "lose",
    "ScissorsRock" :       "lose",
"ScissorsPaper" :           "win",
"ScissorsScissors" :       "draw",
}

let final = userChoice.concat(compChoice)

result = outCome[final]
}



// updating DOM

function updateDom () {
if(result == "win"){
    message.innerText = `You Win! ${userChoice} beats ${compChoice}`
    userScore++
    message.style.backgroundColor = "green"
    }

else if(result == "lose"){
    message.innerText = `You Lose! ${compChoice} beats ${userChoice}`
    compScore++
    message.style.backgroundColor = "red"
    }

else if(result == "draw") {

     message.innerText = `Game was Draw! ${userChoice} ties ${compChoice}`
     message.style.backgroundColor = "rgb(27, 27, 93)"
}


user.innerText =   `${userScore}`
comp.innerText =   `${compScore}`
}