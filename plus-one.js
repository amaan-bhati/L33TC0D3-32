var plusOne = function (digits) {
    let s = digits.join("");

    let n = BigInt(s) + 1n;

    return n.toString().split("");
};
