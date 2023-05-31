let box = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let xscore = document.querySelector('#xscore');
let oscore = document.querySelector('#oscore');

let turn = 'x';
let x = 0; 
let o = 0;

// event check in box
box.forEach( (e) => {
    e.onclick = () => {
        if( e.innerText == '')
        e.innerText = turn ;
        turn =='x' ? turn = 'o' : turn ='x' ;
        winner()
        setHoverText();
    }
}); 


 
//  Reset-button onClick
resetBtn.onclick = () => reset ()
function reset(){
    box.forEach(e => e.innerText = '')
    turn = 'x'
}

// loop and show winner
function winner() {
    let win = [
        [0,1,2],
        [3,4,5,],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6],
    ];

    win.forEach(e => {
        if (box[e[0]].innerText === box[e[1]].innerText && box[e[1]].innerText === box[e[2]].innerText && box[e[0]].innerText) {
        // console.log(box[e[0]].innerText + ' won')  
        box[e[0]].innerText == 'x' ? x++ : o++ ;    
        reset()  
        }
        xscore.innerText = x
        oscore.innerText = o
    });   
}

// function for hover
function setHoverText() {
    box.forEach((e) => {
        e.classList.remove("x-hover");
        e.classList.remove("o-hover");
    });

    let hoverClass =`${turn}-hover`
    box.forEach( e => {
        if (e.innerText == '' ){
            e.classList.add(hoverClass);
        }
    });
}
setHoverText();





