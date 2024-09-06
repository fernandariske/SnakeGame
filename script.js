function leDoTeclado (evento){


    if(evento.keycode === cima){
        sentioAtual = cima;


    } else if(evento.keycode === baixo){
            sentioAtual = baixo;

    
}else if(evento.keycode === esquerda){
    sentioAtual = esquerda;


 } else if(evento.keycode === direita){
        sentioAtual = direita;
 }
}


function deslocarCauda(){

    if (sentioAtual = direita){
        deslocarCauda.unshift([cauda[0][0]+15,cauda[0][1]]);
        cauda.pop();
    }

    if (sentioAtual = esquerda){
        deslocarCauda.unshift([cauda[0][0]+15,cauda[0][1]]);
        cauda.pop();
    }

    if (sentioAtual = cima){
        deslocarCauda.unshift([cauda[0][0]+15,cauda[0][1]]);
        cauda.pop();
    }

    if (sentioAtual = baixo){
        deslocarCauda.unshift([cauda[0][0]+15,cauda[0][1]]);
        cauda.pop();
    }
    }

}
