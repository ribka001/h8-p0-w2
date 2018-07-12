1. Menyusun Barisan Bintang

var rows1;
for(var rows1 = 1; rows1<= 5; rows1++) {
  console.log("*");
}


========================================================
2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;

for(var i = 1; i <= rows2; i++){
  var str="";
  for(var j = 1; j <= rows2; j++){
  str += "*"
  }
  console.log(str);
}


=========================================================
3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3=5;

for (var i = rows3; i >= 1; i--) {
  var str = "";
  for (var j = i; j <= rows3; j++) {
  str += "*";
     }
 console.log(str);
}