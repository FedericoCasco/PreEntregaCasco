// PRE-ENTREGA-CASCO

saludar()

let entrada = Number (prompt ('Por favor escriba su horario de entrada'));



if (entrada >= 8 && entrada <= 11) {
    alert ( 'Haz llegado a tiempo');
    
    let almuerzo = 1;
    while(almuerzo){                                                                                   
        almuerzo=Number(prompt('ingrese 1 para reservar su almuerzo\ningrese 0 para no reservar y trabajar en horario de almuerzo'));     
        if(almuerzo===1){
        alert('se ha reservado su horario almuerzo');
        break;
        }
        console.log('se ha reservado su horario almuerzo');
    }
    // let almuerzo = Number (prompt("Ingrese 1 para reservar su almuerzo\nIngrese 0 para no reservar"));
    
    // if (almuerzo === 1) {alert ('Estupendo su almuerzo ah sido guardado')}
   
    if (almuerzo === 0) {alert('su almuerzo del dia de hoy se sumara a su salario mensual')}

    
}   


else if (entrada > 11 && entrada <=24) {
    alert ('llegada tarde, por favor regularice su situacion llamando al Area de Personal : 0800.000.000')
}

else (alert('Ah llegado demaciado temprano. \n Por favor espere que sean las 8 am y repita el proceso')) 





function saludar() {
    let nombre = prompt ('Hola! cual es tu nombre ?')
    alert ('Bienvenido ' + nombre + '!');
}
