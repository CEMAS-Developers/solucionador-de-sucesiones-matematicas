// let a = [1, 5, 9];
// let n = 9; //A9=33; S9=133;

// let a = [4, 12, 36];
// let n = 5; //A5=324; S5=484;

const inAscOrder = (arr) => {
  return (
    arr.join("") ===
    arr
      .sort(function (a, b) {
        return a - b;
      })
      .join("")
  );
};

const An = (a, n) => {
  if (a[2] - a[1] === a[1] - a[0]) {
    let d = a[2] - a[1];
    let An = a[0] + (n - 1) * d;
    let Sn = (n * (a[0] + An)) / 2;
    return (
      "A=" + a + "; D=" + d + "; A" + n + "=" + An + "; S" + n + "=" + Sn + ";"
    );
  } else if (a[2] / a[1] === a[2] / a[1] || a[2] * a[1] === a[2] * a[1]) {
    let r = a[2] / a[1];
    let An = a[0] * Math.pow(r, n - 1);
    let Sn = (An * r - a[0]) / (r - 1);
    return (
      "A=" + a + "; R=" + r + "; A" + n + "=" + An + "; S" + n + "=" + Sn + ";"
    );
  } else return "NS";
};

const sucesion = (a, n) => {
  if (inAscOrder(a)) return An(a, n);
  else return "NS";
};

// console.log(sucesion(a, n));
