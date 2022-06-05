const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const azul = document.querySelector('.azul');
const reset = document.querySelector('.azul');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{

        mario.classList.remove('jump')

    },500);
}

const loop = setInterval(()=>{
    
    const pipePosition = pipe.offsetLeft;
   
    
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition && marioPosition < 70){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        azul.src = './images/reset.png';
        azul.style.width = '100px';
      

        clearInterval(loop);
        
        reset.addEventListener("click", function() {
    
            location.reload();
        });
        azul.addEventListener("click", function() {
    
            location.reload();
        });
    }    
}, 10);

document.addEventListener('click', jump);
document.addEventListener('keydown', jump);