/* 
In this file, we'll be using variable, condtionals, and loops to play out a fight between Anakin Skywalker and Obiwan Kenobi */

//if(condition){
    //CODE BLOCK(run if condition is true)

let kenobiAttack = 25 
let skywalkerAttack = 35

if(kenobiAttack > skywalkerAttack) {
    console.log('Obiwan  has a better attack')
} else if(kenobiAttack < skywalkerAttack) {
    console.log('Anakin has the better attack')
} else{   
    console.log('They have the same attack')
}

let kenobiHealth = 100
let kenobiDefense = 0

if(skywalkerAttack >= kenobiHealth){
    console.log('Obiwan was slain')
} else { 
    kenobiHealth = kenobiHealth - skywalkerAttack
    console.log("Obiwan's health is now " + kenobiHealth)
}

kenobiDefense += 30

//still unsure about why this 
if((kenobiHealth + 50 ) >= 100){
    kenobiHealth = 100
}else {
    kenobiHealth += 50
}

for(let i = 0; i < 5; i++){
    kenobiHealth -= (skywalkerAttack - kenobiDefense)
    console.log(`Obiwan's health is now ${kenobiHealth}`)
}

while(kenobiHealth >= 0){
    kenobiHealth -= (skywalkerAttack - kenobiDefense)
    console.log(kenobiHealth)
    if(kenobiHealth <= 0){
        console.log('Obiwan has been slain')
    }
}