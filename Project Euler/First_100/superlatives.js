class superlatives {
  #maxState;
  #minState;
  #maxVal;
  #minVal;
  #valid;
  constructor() {
    this.#valid = false;
  }
  AddSate(state, val) {
    if (this.#valid) {
      if (val > this.#maxVal) {
        this.#maxVal = this.#val;
        this.#maxState = this.#state;
      } else if (val < this.#minVal) {
        this.#minVal = val;
        this.#minState = state;
      }
    } else {
      this.#minVal = val;
      this.#maxVal = val;
      this.#minState = state;
      this.#maxState = state;
      this.#valid = true;
    }
  }
  MaxVal() {
    return this.#maxVal;
  }
  MinVal() {
    return this.#minVal;
  }
  MaxState() {
    return this.#maxState;
  }
  MinState() {
    return this.#minState;
  }
  IsValid() {
    return this.#valid;
  }
}
export default superlatives;
