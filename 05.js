let temp = [];
let genap = [];
let ganjil = [];
let hasilMultiply = [];
let prime = [];
let primeLess = [];

for (let i = 0; i <= 1000; i++) { //generate angka
    process
        .stdout
        .write(`${i},`);
    temp.push(i);
}

for (oddEven of temp) { //ganjil genap
    if (oddEven % 2 === 0) {
        genap.push(oddEven);
    } else {
        ganjil.push(oddEven);
    }
}

for (multiply of temp) { //kali 5
    let hasil = multiply * 5;
    hasilMultiply.push(hasil);
}


prime = temp.filter((angka) => {
    for (let i = 2; i <= Math.sqrt(angka); i++) {
      if (angka % i === 0) return false;
    }
    return angka > 1;
  });

  let ang = temp.slice(2, 100);
  primeLess = ang.filter((angka) => {
    for (let i = 2; i <= Math.sqrt(angka); i++) {
      if (angka % i === 0) return false;
    }
    return angka > 1;
  });
  console.log('');
  console.log('');
  console.log('Even : ' + genap);
  console.log('');
  console.log('Odd : ' + ganjil);
  console.log('');
  console.log('Multiply * 5 : ' + hasilMultiply);
  console.log('');
  console.log('Prime : ' + prime);
  console.log('');
  console.log('Prime Less: ' + primeLess);

  