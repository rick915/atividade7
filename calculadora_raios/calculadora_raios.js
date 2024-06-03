raioValor = 0
resultado = 0

const raio = document.querySelector("#Raio")
raio.addEventListener("input", receberValorRaio)

function receberValorRaio(evento){
    raioValor = Number(evento.target.value)
}

const botoes = document.querySelectorAll("button")
    botoes.forEach(botao => {
    botao.addEventListener("click", receberRaio)
})

function receberRaio(evento) {
    botoes.forEach(botao => {
        botao.classList.remove("botao-ativo")

        if(botao.value === evento.target.value) {
            botao.classList.add("botao-ativo")
        }
    })

    if(evento.target.value !== ""){
        resultado = (parseFloat(evento.target.value)**2)*3.14159
    }else{
        resultado =0
    }
}

console.log(resultado)
