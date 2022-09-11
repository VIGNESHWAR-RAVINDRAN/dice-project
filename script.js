const findrandom=Math.floor(Math.random()*6)+1
const firstdiceimage= 'images/dice'+findrandom+'.png';
document.querySelectorAll('img')[0].setAttribute('src',firstdiceimage);

const secondrandom=Math.floor(Math.random()*6)+1
const seconddiceimage= 'images/dice'+secondrandom+'.png';
document.querySelectorAll('img')[1].setAttribute('src',seconddiceimage);

// logic for winner
if(findrandom >secondrandom){
    document.querySelector('h1').innerHTML="🚩 Play 1 Wins!";
}
else if(findrandom <secondrandom){
    document.querySelector('h1').innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector('h1').innerHTML="Draw!";
}