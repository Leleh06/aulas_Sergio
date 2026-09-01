const form = document.getElementById("formCliente");

const ehNumero = (numero) => /^[0-9]+$/.test(numero); //Expressões Regulares... Regex

const cepValido = (cep) => cep.length == 8 && ehNumero(cep)

const msg = document.getElementById("msg")

form.addEventListener("submit", async (e) => {
    e.preventDefault();
});

document.getElementById("cep").addEventListener("focusout", async () => {
    try {
        let cep = document.getElementById("cep").value
        if (cepValido(cep)) {
            const url = `https://viacep.com.br/ws/${cep}/json/`
            const resp = await fetch(url)
            const obj = await resp.json()
            document.getElementById("nomeLog").value = `${obj.logradouro}`
            document.getElementById("bairro").value = `${obj.bairro}`
            document.getElementById("cidade").value = `${obj.localidade}`
            document.getElementById("uf").value = `${obj.uf}`
        }else{
            alert("Digite apenas números (8 dígitos)")
            document.getElementById("cep").value = "00000000"
        }
    }catch{
        msg.textContent = "Erro ao carregar dados"
    }
})