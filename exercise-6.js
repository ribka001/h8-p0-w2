1. Melakukan Looping Menggunakan While

	console.log("LOOPING PERTAMA");
	var number = 2;
	while(number <= 20) { 
	  console.log(number + " - I love coding"); 
	  number +=2; 
	}

	console.log("LOOPING KEDUA");
	var number = 20;
	while(number >= 2) { 
	  console.log(number + " - I will become fullstack developer"); 
	  number -=2; 
	}

===================================================================
2. Melakukan Looping Menggunakan For

	console.log("LOOPING PERTAMA");
	for(var number = 1; number <= 20; number++) {
	  console.log(number + " - I love coding");
	}
	console.log("LOOPING KEDUA");
	for(var number = 20; number >= 1; number--) {
	  console.log(number + " - I will become fullstack developer");
	}

===================================================================
3. Angka Ganjil dan Genap

   for(var number = 1; number <= 100; number++) {
    if (number % 2 === 0){
      console.log("even");
    } else if (number % 2 === 1 ){
      console.log("odd");
    }
   } 


   for(var number = 1; number <= 100; number+=2) {
    if (number % 3 === 0){
      console.log( number + " KELIPATAN 3");
    } else {
      console.log("");
    }
   }



   for(var number = 1; number <= 100; number+=5) {
    if (number % 6 === 0){
      console.log( number + " KELIPATAN 6");
    } else {
      console.log("");
    }
   }



   for(var number = 1; number <= 100; number+=9) {
    if (number % 10 === 0){
      console.log( number + " KELIPATAN 10");
    } else {
      console.log("");
    }
   }