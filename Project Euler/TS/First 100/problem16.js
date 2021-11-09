function poweOfSum(base, exponent) {
    var suma = 0;
    var algo = BigInt(Math.pow(base, exponent));
    var cadena = String(algo);
    for (var index = 0; index < cadena.length; index++) {
        suma += Number(cadena[index]);
    }
    return suma;
}
console.log(poweOfSum(2, 1000));
