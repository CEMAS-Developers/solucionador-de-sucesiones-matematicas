let a = [2, 7, 12];
let index = 0;
let aritmetica, geometrica; // Aritmetica y geometrica
let result = 0;

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

function sucesion(a, x) {
  if (inAscOrder(a)) {
    if (a[2] - a[1] === a[1] - a[0]) {
      console.log("Es aritmetica");
      let d = a[2] - a[1];
      console.log(d);
      console.log(a[0] + (x - 1) * d);
    } else if (a[2] / a[1] === a[2] / a[1]) {
      console.log("Es logaritmica");
    } else {
      console.log("No tiene solucion");
    }
  } else {
    console.log("No tiene solucion");
  }

  return;
}

sucesion(a, 8);

//console.log(result);
