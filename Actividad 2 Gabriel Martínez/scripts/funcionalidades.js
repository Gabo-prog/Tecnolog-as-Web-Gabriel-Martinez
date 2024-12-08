// Comparación con if
const comparaNumeros = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = document.getElementById('compareResult');

    if (num1 > num2) {
        resultado.textContent = `El número mayor es ${num1}`;
    } else if (num1 < num2) {
        resultado.textContent = `El número mayor es ${num2}`;
    } else {
        resultado.textContent = "Ambos números son iguales.";
    }
};

// Switch para meses
const mostrarMes = () => {
    const mes = parseInt(document.getElementById('monthInput').value);
    let mensaje;

    switch (mes) {
        case 1: mensaje = "Enero"; break;
        case 2: mensaje = "Febrero"; break;
        case 3: mensaje = "Marzo"; break;
        case 4: mensaje = "Abril"; break;
        case 5: mensaje = "Mayo"; break;
        case 6: mensaje = "Junio"; break;
        case 7: mensaje = "Julio"; break;
        case 8: mensaje = "Agosto"; break;
        case 9: mensaje = "Septiembre"; break;
        case 10: mensaje = "Octubre"; break;
        case 11: mensaje = "Noviembre"; break;
        case 12: mensaje = "Diciembre"; break;
        default: mensaje = "Número no válido"; break;
    }

    alert(mensaje);
};

// Gestión de nombres
let arregloNombres = [];
const agregarNombre = () => {
    const name = document.getElementById('nameInput').value;
    if (name) {
        arregloNombres.push(name);
        document.getElementById('nameList').textContent = arregloNombres.join(', ');
        document.getElementById('nameInput').value = '';
    }
};

// Asignar eventos
document.getElementById('compareBtn').addEventListener('click', comparaNumeros);
document.getElementById('monthBtn').addEventListener('click', mostrarMes);
document.getElementById('addNameBtn').addEventListener('click', agregarNombre);
