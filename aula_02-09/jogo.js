// // let alunos = ['YASMIM', 'NICOLLY', 'NUBIA', 'ANA', 'KALLBE', 'KAIO', 'OSWALDO', 'EUSTAQUIO',]


// // console.log(alunos.sort())

// // alunos.push("ZECA")
// // alunos.unshift("LAURA")
// // // console.log(alunos)

// // for(let i = 0; i < alunos.length; i++){
// //     console.log(alunos[i])
// // }


// let alunos = [
//     ['Ana', 'Paulo', 'Eva'],
//     ['Zeca', 'Anderson', 'Oswaldo'],
//     ['Kleiton', 'Jubileu', 'Sandro'],
//     ['Mauricio', 'Gonzaga', 'William']
// ]

// for(let l = 0; l < alunos.length; l++){

//     for (let c = 0; c < alunos[l].length; c++) {
//      console.log(alunos[l][c]);

//     }
// }


let button, quebralinha

let tabuleiro = new Array(3)

for (let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(3)
}

for(let i = 0; i < tabuleiro.length; i++){
    for(let j = 0; j < tabuleiro[i].length; j++){
        button = document.createElement('button')
        button.setAttribute('type', 'button')
        button.setAttribute('id', 'bt' + i + " " + j)
        button.setAttribute('class', 'btJogo' + i)
        button.append(document.createTextNode(""))
        document.body.append(button)
    }
}