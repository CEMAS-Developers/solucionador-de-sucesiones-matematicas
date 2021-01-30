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
    let type = "Aritmetica";
    let result = {
      A: a,
      D: d,
      Type: type,
      An: An,
      Sn: Sn,
    };
    return result;
  } else if (a[2] / a[1] === a[2] / a[1] || a[2] * a[1] === a[2] * a[1]) {
    let r = a[2] / a[1];
    let An = a[0] * Math.pow(r, n - 1);
    let Sn = (An * r - a[0]) / (r - 1);
    let type = "Geometrica";
    let result = {
      A: a,
      R: r,
      Type: type,
      An: An,
      Sn: sn,
    };
    return result;
  } else return;
};

const sucesion = (a, n) => {
  if (inAscOrder(a)) return An(a, n);
  else return;
};

function resolver() {
  let a1 = parseFloat(document.getElementById("a1").value);
  let a2 = parseFloat(document.getElementById("a2").value);
  let a3 = parseFloat(document.getElementById("a3").value);
  let n = parseFloat(document.getElementById("n").value);
  let a = [a1, a2, a3];
  let type = sucesion(a, n).Type;
  let an = sucesion(a, n).An;
  let sn = sucesion(a, n).Sn;
  let d = sucesion(a, n).D;
  let r = sucesion(a, n).R;
  let text = "";

  if (type == "Aritmetica") {
    r = d;
    text = "D:";
  } else if (type == "Geometrica") {
    d = r;
    text = "R:";
  }

  document.getElementById("sucesion").innerHTML = a;
  document.getElementById("text").innerHTML = text;
  document.getElementById("dr").innerHTML = d;
  document.getElementById("type").innerHTML = type;
  document.getElementById("an").innerHTML = an;
  document.getElementById("sn").innerHTML = sn;
}
