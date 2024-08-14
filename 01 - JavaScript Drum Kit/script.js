document.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //keycode é uma propriedade de um evento do teclado;
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);//pega a tecla pressionada associada com o audio através do keyCode
    if(!audio){ //impede que a função prossiga caso não haja audio associado a tecla pressionada;
        return;
    }
    audio.currentTime = 0; //propriedade de audio que retorna o tempo em segundos baseado no valor passado;
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e) {
    console.log(e);
    if(e.propertyName !== 'transform') { //se não for um 'transform' será ignorado;
        return;
    }
    this.classList.remove('playing'); //o this se refere a key com o eventListener
}

const keys = document.querySelectorAll('.key');/* quando há um nodelist, como no caso da constante keys,
é necessário passar por todos elementos usando um loop para adicionar o event listener */

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//adiciona um eventListener em cada tecla com o evento 'trasitionend' que ativará uma função assim o transition definido no css se encerrar;


