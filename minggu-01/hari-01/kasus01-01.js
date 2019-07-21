//1. Minimum
function min(b, a) {
  if (b > a) return a;
  else return b;
}
//console.log(min(0, 10));
// → 0
//console.log(min(0, -10));
// → -10

//2. Recursion
function isEven(n) {
  if (n %2== 0) return true;
else return false;
}

//console.log(isEven(50));
// → true
//console.log(isEven(75));
// → false
//console.log(isEven(-1));
// → false

//3.Bean counting
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

//console.log(countBs("BBC"));
// → 2
//console.log(countChar("kakkerlak", "k"));
// → 4