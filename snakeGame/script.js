
//Game constants
let direction={x:0,y:0};
const foodSound=new Audio('eat.mp3');
const gameOverSound=new Audio('over.mp3');
const moveSound=new Audio('turn.mp3');
const musicSound=new Audio('music.mp3');
let speed=5;
let score=0;
let lastPaintTime=0;
let snakeArr=[
    {x:13,y:15}
];
food= {x:6,y:7};
//Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000<1/speed){
        return;
    }
    else{
        lastPaintTime=ctime;
        gameEngine();
    }
    // console.log(ctime);
}
function isCollide(sarr){
    //if you bump into yourself
    for(let i=1;i<snakeArr.length;i++){
        if(snakeArr[i].x===snakeArr[0].x && snakeArr[i].y===snakeArr[0].y){
            return true;
        }
    }
    //if you bump into the wall
    if(snakeArr[0].x>=18 || snakeArr[0].x<=0 || snakeArr[0].y>=18 || snakeArr[0].y<=0){
        return true;
    }
    return false;
}

function gameEngine(){
    musicSound.play();

    //part 1: Updating the snake array & food
if(isCollide(snakeArr[0])){
    gameOverSound.play();
    musicSound.pause();
    direction={x:0,y:0};
    alert("Game Over! Press any key to play again!");
    snakeArr=[{x:13,y:15}];
    musicSound.play();
    score=0;
}
// If you have eaten the food, increment the score and regenerate the food
if(snakeArr[0].y===food.y && snakeArr[0].x===food.x){
    foodSound.play();
    score+=1;
    if(score>hiscoreval){
        hiscoreval=score
        localStorage.setItem("hiscore",JSON.stringify(score));
        hiscorebox.innerHTML="High Score:"+hiscoreval;

    }
    Scorebox.innerHTML="Score:"+score;
    snakeArr.unshift({x:snakeArr[0].x+direction.x,y:snakeArr[0].y+direction.y});
    let a=2;
    let b=16;
    food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
}
//Moving the snake
for(let i=snakeArr.length-2;i>=0;i--){
    snakeArr[i+1]={...snakeArr[i]};
}
snakeArr[0].x+=direction.x;
snakeArr[0].y+=direction.y;
    //part 2: Display the snake and food
    //part 3: Display the score
    //part 4: Game over
    //part 1: Updating the snake array & food
    //display the snake
    board.innerHTML="";
snakeArr.forEach((e,index)=>{
    snakeElement=document.createElement('div');
    snakeElement.style.gridRowStart=e.y;
    snakeElement.style.gridColumnStart=e.x;
    if(index==0){
        snakeElement.classList.add('head');
    }
    else{
        snakeElement.classList.add('snake');
    }
    board.appendChild(snakeElement);
});
// Display the food
foodElement=document.createElement('div');
foodElement.style.gridRowStart=food.y;
foodElement.style.gridColumnStart=food.x;
foodElement.classList.add('food');
board.appendChild(foodElement);


}






//main logic
let hiscore=localStorage.getItem("hiscore");
if(hiscore===null){
    hiscoreval=0;
    localStorage.setItem("hiscore",JSON.stringify(hiscoreval));
}
else{
    hiscoreval=JSON.parse(hiscore);
    hiscorebox.innerHTML="High Score:"+hiscore;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown',(e)=>{
    direction= {x:0,y:1}//start the game
    moveSound.play();
    switch(e.key){
        case "ArrowUp":
            // console.log("ArrowUp");
            direction.x=0;
            direction.y=-1;
            break;
        case "ArrowDown":
            // console.log("ArrowDown");
            direction.x=0;
            direction.y=1;
            break;
        case "ArrowLeft":
            // console.log("ArrowLeft");
            direction.x=-1;
            direction.y=0;
            break;
        case "ArrowRight":
            // console.log("ArrowRight");
            direction.x=1;
            direction.y=0;
            break;
        default:
            break;
    }
});