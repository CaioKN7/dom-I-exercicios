//Exercício 1
const frutas = ["laranja", "limão", "uva"] 

/* const laranja = document.getElementById("fruta-1")
laranja.innerHTML+=frutas[0]

const limao = document.getElementById("fruta-2")
limao.innerHTML+=frutas[1]

const uva = document.getElementById("fruta-3")
uva.innerHTML+=frutas[2] */


for (let index = 0; index < frutas.length; index++) {
document.getElementById(`fruta-${index+1}` ).innerHTML+=frutas[index]

}

//Exercício 2
const inputFruta = document.getElementById("fruta-5")

function imprimeFruta() {
    console.log(inputFruta.value);
    
}


//Exercício 3
const novaFruta = document.getElementById("fruta-4")
function adicionarNovaFruta() {
    novaFruta.innerHTML+=inputFruta.value
    inputFruta.value=""

}


