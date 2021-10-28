const CACHE_SIZE:number = 1000;
let cache:number[] = [CACHE_SIZE];
class superlatives {
  private maxState:number;
  private minState:number;
  private maxVal:number;
  private minVal:number;
  private valid:boolean;
  constructor() {
    this.valid = false;
  }
  public AddSate(state:number, val:number) {
    if (this.valid) {
      if (val > this.maxVal) {
        this.maxVal = val;
        this.maxState = state;
      } else if (val < this.minVal) {
        this.minVal = val;
        this.minState = state;
      }
    } else {
      this.minVal = val;
      this.maxVal = val;
      this.minState = state;
      this.maxState = state;
      this.valid = true;
    }
  }
  public MaxVal():number {
    return this.maxVal;
  }
  public MinVal():number{
    return this.minVal;
  }
  public MaxState():number{
    return this.maxState;
  }
  public MinState():number{
    return this.minState;
  }
  public IsValid():boolean{
    return this.valid;
  }
}

function hailstone(number:number) {
  if (number & 1) {
    return 3 * number + 1;
  } else {
    return number >> 1;
  }
}

function findDepth(number:number) {
  let d:number;
  if (number == 1) {
    return 0;
  }
  if (number < CACHE_SIZE && cache[number]) {
    return cache[number];
  }
  d = findDepth(hailstone(number)) + 1;
  if (number < CACHE_SIZE) {
    cache[number] = d;
  }
  return d;
}

function main() {
  let N:number = 1000;
  const supe = new superlatives();
  let i:number;
  for (i = 2; i < N; ++i) {
    supe.AddSate(i, findDepth(i));
  }
  console.log(`${supe.MaxState()} has a length of ${supe.MaxVal()}`);
}

main();
export { superlatives };
