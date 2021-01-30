let a = [1, 5, 9];
let n = 9;
console.log(sucesion(a, n));

function sucesion(a, n) {
  if (inAscOrder(a)) return An(a, n);
  else return "NS";
}

function inAscOrder(arr) {
  return (
    arr.join("") ===
    arr
      .sort(function (a, b) {
        return a - b;
      })
      .join("")
  );
}

function An(a, n) {
  if (a[2] - a[1] === a[1] - a[0]) {
    let d = a[2] - a[1];
    let An = a[0] + (n - 1) * d;
    let Sn = (n * (a[0] + a[n - 1])) / 2;
    return (
      "A= " + a + ", D= " + d + ", A" + n + "= " + An + ", S" + n + "= " + Sn
    );
  } else if (a[2] / a[1] === a[2] / a[1]) {
    // let r = a[2] / a[1];
    // n = Math.pow(a[0] * r, n - 1);
    return "No Code.";
  } else return "NS";
}
