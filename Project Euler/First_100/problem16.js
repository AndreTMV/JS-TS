const powerOfSum = (base, exponente) => {
  let suma = 0;
  let string = String(BigInt(base ** exponente));
  for (let i = 0; i < string.length; i++) {
    suma += Number(string[i]);
  }
  return suma;
};

console.log(powerOfSum(2, 1000));
