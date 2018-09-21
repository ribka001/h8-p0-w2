function xo(str) {
  var totalo = "";
  var totalx = "";
  for(var i = 0; i <= str.length - 1; i++){
    if (str[i] === 'x'){
      totalx = totalx + 1
      }else if (str[i] === 'o'){
      totalo = totalo + 1
      }
    }
  if (totalo.length === totalx.length){
  return true;
  }else{
    return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true