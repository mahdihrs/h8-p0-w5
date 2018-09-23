function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var result = [];
  var obj = {};

  for (var i = 0; i < arrPenumpang.length; i++) {
    obj[arrPenumpang[i][0]] = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      //
      bayar: 1
    }
  }

  for (var i = 0; i < arrPenumpang.length; i++) {
    obj[arrPenumpang[i][0]].bayar = (rute.indexOf(obj[arrPenumpang[i][0]].tujuan) - rute.indexOf(obj[arrPenumpang[i][0]].naikDari)) * 2000
  }

  if (arrPenumpang === []) {
    return [];
  }

  return Object.values(obj);
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
