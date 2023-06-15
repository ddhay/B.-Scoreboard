// function increment(){
//     count += 1;
// }

let countScoreHome = document.getElementById("count-score-home");
let countHome = 0;

function incrementHome1(){
    countHome += 1;
    countScoreHome.innerText=countHome;
    
}

function incrementHome2(){
    countHome +=2;
    countScoreHome.innerText=countHome;

}

function incrementHome3(){
    countHome +=3;
    countScoreHome.innerText=countHome;

}

let countScoreGuests=document.getElementById("count-score-guests");
let countGuests = 0;


function incrementGuests1(){
    countGuests +=1;
    countScoreGuests.innerText=countGuests;

}

function incrementGuests2(){
    countGuests +=2;
    countScoreGuests.innerText=countGuests;

}

function incrementGuests3(){
    countGuests +=3;
    countScoreGuests.innerText=countGuests;

}

// let countScoreGuests = document.getElementById("count-score-guests");
// let countGuests = 0;

// function increment(){
//     countCountGuests += 1;
//     countScore.innerText=count;
// }