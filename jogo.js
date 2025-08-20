const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const Reinicar = document.getElementById("reiniciar");
const Voltar = document.getElementById("voltar");

const jump = () =>{
    mario.classList.add('jump');
    setTimeout(() => {

   mario.classList.remove('jump');


    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 10) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    mario.style.animation = 'none';
    mario.style.left = `${pipePosition}px`;
    Reinicar.style.opacity = 1;
    Voltar.style.opacity = 1;
    mario.src='img/perdeeu.png';
    clearInterval(loop);
}
}, 10);

 document.addEventListener("keydown", function (event) {
                if ((event.key === "r" || event.key === "R")) {
                    location.reload();
                }
                if ((event.key === "v" || event.key === "V")) {
                    Voltar.click();
                }
            });

document.addEventListener('keydown', jump);




