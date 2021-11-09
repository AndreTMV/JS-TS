function poweOfSum (base: number, exponent: number):number {
  let suma:number = 0;
  const algo:bigint = BigInt(base**exponent);
  const cadena:string = String(algo);
  for (let index = 0; index < cadena.length; index++) {
    suma += Number(cadena[index]);
  }
  return suma;
}

console.log(poweOfSum(2, 1000))
