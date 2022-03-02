const matricula = 900000
let creditos, descuento, totalM;

function LeerDatos() {
    creditos = Number (prompt('Ingrese Creditos'))
}
LeerDatos()
calcular(creditos)

function calcular (creditos) {
    if(creditos <=6){
        descuento = matricula * 0.5;
    }
    else if(creditos > 6 && creditos <=10){
        descuento = matricula * 0.25;
    }
    else if(creditos > 10){
        descuento = 0;
    }else{
        alert('No valido')
    }
    totalM = matricula - descuento
}

console.log('El valor de la matricula es',totalM)
alert(totalM)

