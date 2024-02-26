let panBox = document.querySelector("#pan-box");
let hitVal = document.querySelector('#hitVal');
let scoreVal = document.querySelector('#scoreVal');
let hitNUm = 0;
var timer = 60;
var score = 0;


function Bubbly (){
    let cutlet = "";
    
    for(i=1; i<=270; i++){
        let rnum = Math.floor(Math.random() *10);
        cutlet += `<div class="bubble">${rnum}</div>` ;
    }
    panBox.innerHTML = cutlet;
}

function getHit (){
    hitNUm = Math.floor(Math.random() * 10);
    hitVal.textContent = hitNUm;
}

function incScore(){
    score += 10;
    scoreVal.textContent = score;
}



function runTimer (){
    var timeLapse = setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector('#timVal').textContent = timer;
        }else{
            clearInterval(timeLapse);
            panBox.style.display ="block";
            panBox.innerHTML =` <h1 class="game-over"> GAME OVER </h1> <br>
                                <p> Your score is ~ ${scoreVal.textContent}</p>
                            `
        }
           
    }, 1000)
}

runTimer();
Bubbly();

panBox.addEventListener('click',(det)=>{
    let clickNum = Number(det.target.textContent);
        if(clickNum == hitVal.textContent){
            incScore();
            getHit();
            Bubbly();
        }else{
            if(det.target.className === "bubble"){
                det.target.style.backgroundColor = "red";

            }else{
                 det.target.style.backgroundColor = "white";
            }
        }
})




