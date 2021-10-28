import { superlatives } from "./superlatives.mjs";
const CACHE_SIZE = 1000;
let cache = [CACHE_SIZE];

function hailstone(number) {
  if (number & 1) {
    return 3 * number + 1;
  } else {
    return number >> 1;
  }
}

function findDepth(number) {
  let d;
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
  let N = 1000;
  const supe = new superlatives();
  let i;
  for (i = 2; i < N; ++i) {
    supe.AddSate(i, findDepth(i));
  }
  console.log(`${supe.MaxState()} has a length of ${supe.MaxVal()}`);
}

main();
