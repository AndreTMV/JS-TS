"use strict";
exports.__esModule = true;
exports.superlatives = void 0;
var CACHE_SIZE = 1000;
var cache = [CACHE_SIZE];
var superlatives = /** @class */ (function () {
    function superlatives() {
        this.valid = false;
    }
    superlatives.prototype.AddSate = function (state, val) {
        if (this.valid) {
            if (val > this.maxVal) {
                this.maxVal = val;
                this.maxState = state;
            }
            else if (val < this.minVal) {
                this.minVal = val;
                this.minState = state;
            }
        }
        else {
            this.minVal = val;
            this.maxVal = val;
            this.minState = state;
            this.maxState = state;
            this.valid = true;
        }
    };
    superlatives.prototype.MaxVal = function () {
        return this.maxVal;
    };
    superlatives.prototype.MinVal = function () {
        return this.minVal;
    };
    superlatives.prototype.MaxState = function () {
        return this.maxState;
    };
    superlatives.prototype.MinState = function () {
        return this.minState;
    };
    superlatives.prototype.IsValid = function () {
        return this.valid;
    };
    return superlatives;
}());
exports.superlatives = superlatives;
function hailstone(number) {
    if (number & 1) {
        return 3 * number + 1;
    }
    else {
        return number >> 1;
    }
}
function findDepth(number) {
    var d;
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
    var N = 1000;
    var supe = new superlatives();
    var i;
    for (i = 2; i < N; ++i) {
        supe.AddSate(i, findDepth(i));
    }
    console.log(supe.MaxState() + " has a length of " + supe.MaxVal());
}
main();
