function suma(a,b){
    return a + b;
}

function resta(a,b){
    return a - b;
}

function division(a,b){
    if (b !== 0){
        return a / b;
    } else {return 'Error';
    }
}

function multiplicacion(a,b){
    return a * b;
}

module.exports = {suma,resta,division,multiplicacion} /*Si exporto una sola, pongo module.exports = suma , por ejemplo.
                                                        Si son varias, va con llaves como esta escrito en este caso */