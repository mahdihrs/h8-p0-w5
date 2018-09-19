function deepSum (arr) {
  //variabel 'sumArr' untuk menyimpan nilai akhir penambahan setiap elemen array
  var sumArr = 0;
  //mencari nilai setiap elemen hingga array paling dalam untuk kemudian dijumlahkan dengan menggunakan looping 3 layer
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      for (var k = 0; k < arr[i][j].length; k++) {
        //masukkan sekaligus tambahkan setiap elemen array ke dalam variabel 'sumArr'
        sumArr += arr[i][j][k];
      }
    }
  }
  //kondisi untuk 'sumArr' yang kosong maka akan me-return nilai 'No Number'
  if (sumArr === 0) {
    return 'No Number';
  }
  //return nilai 'sumArr' setelah melalui proses penambahan setiap elemen dalam array
  return sumArr;
}

//TEST CASE
console.log(deepSum([ [ [4, 5, 6], [9, 1, 2, 10], [9, 4, 3], ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156
//
console.log(deepSum([])); // No number
