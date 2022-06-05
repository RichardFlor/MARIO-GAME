const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const btn = document.querySelector("#refresh");

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{

        mario.classList.remove('jump')

    },500);
}

const loop = setInterval(()=>{
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        
        btn.addEventListener("click", function() {
    
            location.reload();
        });
    }    
}, 10);




document.addEventListener('keydown', jump);