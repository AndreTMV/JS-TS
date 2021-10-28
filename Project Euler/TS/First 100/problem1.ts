function sumOf(selectedNumber: number, target: number) {
  let p:number = (target / selectedNumber) >> 0;
  return ((selectedNumber*(p*(p+1)))/2) >> 0;
}

console.log(sumOf(3, 999) + sumOf(5,999) - sumOf(15,999));
