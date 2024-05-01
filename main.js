function limparFormulario() {
    document.getElementById("campoA").value = "";
    document.getElementById("campoB").value = "";
}

function validarFormulario(event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA) {
        alert("Formulário válido.");
        limparFormulario()
    } else {
        alert("Número B deve ser maior que o número A. Formulário inválido.");
    }
}

document.getElementById("meuFormulario").addEventListener("submit", validarFormulario);
