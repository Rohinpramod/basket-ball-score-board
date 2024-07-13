let scoreHome = document.getElementById('score-home')
let scoreGuest = document.getElementById('score-guest')

 let countHome = 0
 
function button1Home(){ 
     countHome = countHome + 1
    scoreHome.innerHTML = countHome
    console.log("clicked-btn-1-home") 
}

function button2Home(){ 
    countHome = countHome + 2
   scoreHome.innerHTML = countHome
   console.log("clicked-btn-2-home") 
}

function button3Home(){ 
    countHome = countHome + 3
   scoreHome.innerHTML = countHome
   console.log("clicked-btn-3-home") 
}

let countGuest = 0

function button1Guest(){ 
    countGuest = countGuest + 1
   scoreGuest.innerHTML = countGuest
   console.log("clicked-btn-1-home") 
}

function button2Guest(){ 
    countGuest = countGuest + 2
    scoreGuest.innerHTML = countGuest
   console.log("clicked-btn-1-home") 
}

function button3Guest(){ 
    countGuest = countGuest + 3
    scoreGuest.innerHTML = countGuest
   console.log("clicked-btn-1-home") 
}