let mapAminoacidoProteina = { F: 'UUU', L: 'UUA', I: 'AUU', M: 'AUG', V: 'GUU', 
S: 'UCU', P: 'CCU', T: 'ACU', A: 'GCU', Y: 'UAU', H: 'CAU', Q: 'CAA', N: 'AAU', 
K: 'AAA', D: 'GAU', E: 'GAA', C: 'AGU', W: 'UGG', R: 'CGU', S: 'AGU', G: 'GGU'}


function traducirProteina() {
    var proteina = prompt("Ingrese la proteina", "");
    if (proteina != null) {
        console.log("EL ARN posible resultante es: ", obtenerARNCodificante(proteina));
    }
}

function obtenerARNCodificante(proteina) {
    let arn = ''
    Array.from(proteina).forEach((aminoacido) => {
        arn+=mapAminoacidoProteina[aminoacido];
    });
    return arn
}

traducirProteina();

