let left_score=0;
let right_score=0;



let update_left=document.getElementById("home-score-left");
let update_right=document.getElementById("home-score-right");


function inc_1(){
    left_score++;
    update_left.innerText=left_score;
}
function inc_2(){
    left_score+=2;
     update_left.innerText=left_score;
}
function inc_3(){
    left_score+=3;
     update_left.innerText=left_score;
}

function Inc_1(){
    right_score++;
    update_right.innerText=right_score;
}
function Inc_2(){
    right_score+=2;
     update_right.innerText=right_score;
}
function Inc_3(){
    right_score+=3;
     update_right.innerText=right_score;
}


function resetleft(){
    left_score=0;
    update_left.innerText=left_score;
}

function resetright(){
    right_score=0;
    update_right.innerText=right_score;
}
