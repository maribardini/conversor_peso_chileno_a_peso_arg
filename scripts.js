

function calculo() {
    let num = parseInt(document.getElementById("valor").value)
    // let resultado = 0
    pesoChileno = 0.399
    if (num >= 1) {
        let resultado = num * pesoChileno
        Swal.fire({
            title: "$" + num + " equivale a $" + resultado.toFixed(2) + " pesos arg.",
            showClass: {
                popup: "$" + num + " equivale a $" + resultado.toFixed(2) + " pesos arg."
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    else {
        Swal.fire({
            title: "Ingrese monto mayor a $0",
            showClass: {
                popup: "Ingrese monto mayor a $0"
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
}

