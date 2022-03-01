var won = "You won."
var win = false
var lost = "You lost."
var loss= false
var obj =  document.getElementById("chicken")
let moveby =10;
var t= 30

window.addEventListener('load', ()=>{
    console.log(obj)
    obj.style.position= 'absolute';
    obj.style.top = "20px";
    obj.style.left = "20px";
});



window.addEventListener('keydown', (e)=>{
   console.log(e.keyCode)
   if(loss==false && win==false){
    switch(e.keyCode){
        case 37:
            obj.style.left = parseInt(obj.style.left)- moveby + 'px';
            break;
        case 39:
            obj.style.left = parseInt(obj.style.left)+ moveby + 'px';
            break;
        case 38:
            obj.style.top = parseInt(obj.style.top)- moveby + 'px';
            break;
        case 40:
            obj.style.top = parseInt(obj.style.top)+ moveby + 'px';
            break;
    }
}
})
function checkChicken(){
    console.log(obj.getBoundingClientRect().top + " " + obj.getBoundingClientRect().left)
        if(win == false){
        if((obj.getBoundingClientRect().top>=280 && obj.getBoundingClientRect().top<= 300) && (obj.getBoundingClientRect().left>=700 && obj.getBoundingClientRect().left<=720)){
        var message= document.createElement('p')
        message.innerText = won + " Chicken is saved. Well done!";
        document.getElementById('message').appendChild(message)
        win=true;
    }
}
}
function fenceKill(){
    if(loss==false){
        if(((obj.getBoundingClientRect().top<10 || obj.getBoundingClientRect().top>460  ) ||  (obj.getBoundingClientRect().left <10 || obj.getBoundingClientRect().left>750 ))||
        ((obj.getBoundingClientRect().top<=100 && obj.getBoundingClientRect().top>10) &&  (obj.getBoundingClientRect().left <=700 && obj.getBoundingClientRect().left>=360 ))){
            var message= document.createElement('p')
            message.innerText = lost+ "Chicken got electrocuted by the fence.";
            document.getElementById('message').appendChild(message)
            loss=true;  
        }
    }
}
function cat1Kills(){
    if(loss==false){
    if(((obj.getBoundingClientRect().top>=260 && obj.getBoundingClientRect().top<=390) &&  (obj.getBoundingClientRect().left <=360 && obj.getBoundingClientRect().left>=200 ))||
    ((obj.getBoundingClientRect().top>=320 && obj.getBoundingClientRect().top<=400) &&  (obj.getBoundingClientRect().left <=180 && obj.getBoundingClientRect().left>=40 ))||
    ((obj.getBoundingClientRect().top>=130 && obj.getBoundingClientRect().top<=190) &&  (obj.getBoundingClientRect().left <=500 && obj.getBoundingClientRect().left>= 390))||
    ((obj.getBoundingClientRect().top>=340 && obj.getBoundingClientRect().top<=460) &&  (obj.getBoundingClientRect().left <=570 && obj.getBoundingClientRect().left>= 440))){
        var message= document.createElement('p')
        message.innerText = lost + " Cute kitty had a cute chicken dinner";
        document.getElementById('message').appendChild(message)
        loss=true;  
    }
}
}

function cat2Kills(){
    if(loss==false){
    if(((obj.getBoundingClientRect().top>=70 && obj.getBoundingClientRect().top<=150) &&  (obj.getBoundingClientRect().left <=200 && obj.getBoundingClientRect().left>=40 ))||
    ((obj.getBoundingClientRect().top>=200 && obj.getBoundingClientRect().top<=280) &&  (obj.getBoundingClientRect().left <=110 && obj.getBoundingClientRect().left>=10 )) ||
    ((obj.getBoundingClientRect().top>=170 && obj.getBoundingClientRect().top<=250) &&  (obj.getBoundingClientRect().left <=370 && obj.getBoundingClientRect().left>=220 ))||
    ((obj.getBoundingClientRect().top>=230 && obj.getBoundingClientRect().top<=320) &&  (obj.getBoundingClientRect().left <=570 && obj.getBoundingClientRect().left>=390 ))){
        var message= document.createElement('p')
        message.innerText = lost+ " Black cat had juicy chicken dinner";
        document.getElementById('message').appendChild(message)
        loss=true;  
        }
    }
}

function catTurn(){
    if(loss==false){
      console.log(obj.getBoundingClientRect().left)
        if(obj.getBoundingClientRect().left >160){
            document.getElementById('cat2').style.transform= 'rotateY(180deg)';
        }
    }
}
function timer(){
    if(win==false && loss==false && t>=0){
        document.getElementById('seconds').innerText=t;
        t--
    }if(t<0 && loss==false){
        var message= document.createElement('p')
        message.innerText = lost+ " Oops.Time over.";
        document.getElementById('message').appendChild(message)
        loss=true;
    }
}
setInterval(checkChicken, 1000)
checkChicken

setInterval(cat1Kills, 1000)
cat1Kills

setInterval(cat2Kills,1000)
cat2Kills

setInterval(catTurn, 1000)
catTurn

setInterval(timer,1000)
timer

setInterval(fenceKill,1000)
timer