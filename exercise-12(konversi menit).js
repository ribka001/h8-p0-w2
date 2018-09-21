function konversiMenit(menit) {
  var minutesRemainder = menit % 60;
    var minute = "";
    if (menit%60 <10) {
    minute = "0" + minutesRemainder;
    } else {
      minute = minutesRemainder;
      }
  var hoursConverter = (menit - minutesRemainder) / 60;
  return hoursConverter + ":" + minute;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00