let dv1, dv2, result1, result2

function validarCPF(){
    let multiplicador = 2
    let acc1 = 0
    let acc2 = 0
    let cpfCli = document.getElementById("cpf").value

    if (cpfCli.length != 11){
        alert("CPF inválido!")
    }else{
        let cpf9Dig = cpfCli //substring (0,8)

        for (let i = 8; i >= 0; i--) {
            let dig = Number(cpf9Dig[i])
            dig *= multiplicador
            acc1 += dig
            multiplicador++
        }

        result1 = acc1 % 11

        if (result1 == 0 || result1 == 1) {
            dv1 = 0
        } else {
            dv1 = 11 - result1
        }

        let cpf10Dig = cpfCli

        for (let i = 0; i <= 9; i++){
            let dig2 = Number(cpf10Dig[i])

            dig2 *= multiplicador //multiplicador = 11
            acc2 += dig2
            multiplicador--
        }

        result2 = acc2 % 11

        if (result2 == 0 || result2 == 1) {
            dv2 = 0
        } else {
            dv2 = 11 - result2
        }

        if (cpfCli[9] !== dv1.toString() || cpfCli[10] !== dv2.toString()){
            alert("CPF inválido!")
            document.getElementById("cpf").value = ''

        }
    }
}