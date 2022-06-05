const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const reset = document.querySelector('.refresh');

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

        // clouds.src = './images/reset.png';
        // clouds.style.width = '100px';
        // clouds.style.marginLeft = '-600px';
        // clouds.style.marginTop = '200px';

        // btn.src = './images/reset.png';
        // btn.style.width = '75px';
        // btn.style.marginTop = '200px';
        // btn.style.marginLeft = '600px';

        clearInterval(loop);
        
        reset.addEventListener("click", function() {
    
            location.reload();
        });
    }    
}, 10);




document.addEventListener('click', jump);
document.addEventListener('keydown', jump);