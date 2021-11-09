const countRoutes = (gridSize:number)=>{
  let result:number = 1;
  for (let i:number = 0; i < gridSize; i++) {
    result *= (2*gridSize) - i;
    result /= i + 1;
  }
  return result;
}

console.log(countRoutes(20));
