let button, quebraLinha, pinta = 0
let tabuleiro = new Array(8)
for (let i = 0; i < tabuleiro.length; i++) {
    tabuleiro[i] = new Array(8)
}

for (let i = 0; i < tabuleiro.length; i++) {
    quebraLinha = document.createElement('br')
    document.body.append(quebraLinha)
    for (let j = 0; j < tabuleiro[i].length; j++) {
        button = document.createElement('button') //pega o valor do elemento 
        button.setAttribute('type', 'button')
        button.setAttribute('id', 'bt' + i + "" + j)
        button.setAttribute('class', 'btJogo' + i)
        button.append(document.createTextNode(""))
        document.body.append(button)

        if (i % 2 == 0) {

            if (pinta % 2 == 0) {
                document.getElementById('bt' + i + "" + j).style.backgroundColor = "white"
            }else {
                document.getElementById('bt' + i + "" + j).style.backgroundColor = "black"

            }
        } else {
            if (pinta % 2 == 0) {
                document.getElementById('bt' + i + "" + j).style.backgroundColor = "black"
            } else {
                document.getElementById('bt' + i + "" + j).style.backgroundColor = "white"

            }
        }
        pinta++
    }
}