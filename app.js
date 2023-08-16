let resultado = document.getElementById("resultado")

function verificarResposta(resposta){
    if(resposta === 'c'){
        resultado.innerHTML = "Resposta correta";
        resultado.style.color = "green";
        question1.style.display = "none";
        correct.style.display = "block";
        setTimeout(() => {
            correct.style.display = "none";
        }, "2000");
        setTimeout(() => {
            question2.style.display = "block";''
        }, "2500");
    
    } else{
        resultado.innerHTML = "Resposta incorreta";
        resultado.style.color = "red";
    }
}

let resultado1 = document.getElementById("resultado1")

function verificarResposta1(resposta){
    if(resposta === 'c'){
        resultado1.innerHTML = "Resposta correta";
        resultado1.style.color = "green";
        question2.style.display = "none";
        correct.style.display = "block";
        setTimeout(() => {
            correct.style.display = "none";
        }, "2000");
        setTimeout(() => {
            question3.style.display = "block";''
        }, "2500");

    } else{
        resultado1.innerHTML = "Resposta incorreta";
        resultado1.style.color = "red";
    }
}

let resultado2 = document.getElementById("resultado2")
function verificarResposta2(resposta){
    if(resposta === 'c'){
        resultado2.innerHTML = "Resposta correta";
        resultado2.style.color = "green";
        question3.style.display = "none";
        correct.style.display = "block";
        setTimeout(() => {
            correct.style.display = "none";
        }, "2000");
        setTimeout(() => {
            question4.style.display = "block";''
        }, "2500");

    } else{
        resultado2.innerHTML = "Resposta incorreta";
        resultado2.style.color = "red";
    }
}

let resultado3 = document.getElementById("resultado3")
function verificarResposta3(resposta){
    if(resposta === 'c'){
        resultado3.innerHTML = "Resposta correta";
        resultado3.style.color = "green";
        question3.style.display = "none";
        correct.style.display = "block";
        setTimeout(() => {
            correct.style.display = "none";
        }, "2000");
        setTimeout(() => {
            question4.style.display = "block";''
        }, "2500");

    } else{
        resultado3.innerHTML = "Resposta incorreta";
        resultado3.style.color = "red";
    }
}

let resultado4 = document.getElementById("resultado4")
function verificarResposta4(resposta){
    if(resposta === 'c'){
        resultado4.innerHTML = "Resposta correta";
        resultado4.style.color = "green";
        question4.style.display = "none";
        correct.style.display = "block";
        setTimeout(() => {
            correct.style.display = "none";
        }, "2000");
        setTimeout(() => {
            question5.style.display = "block";''
        }, "2500");

    } else{
        resultado5.innerHTML = "Resposta incorreta";
        resultado5.style.color = "red";
    }
}

let resultado5 = document.getElementById("resultado5")
function verificarResposta5(resposta){
    if(resposta === 'a'){
        resultado5.innerHTML = "Resposta correta";
        resultado5.style.color = "green";
        question5.style.display = "none";
        correct.style.display = "block";
        setTimeout(() => {
            correct.style.display = "none";
        }, "2000");
        setTimeout(() => {
            end.style.display = "block";''
        }, "2500");

    } else{
        resultado5.innerHTML = "Resposta incorreta";
        resultado5.style.color = "red";
    }
}
