let containerEl = document.getElementById ("container-fluid");



for (let i = 1; i <= 100; i++) {
    
    let numberEl = document.createElement("div");

    containerEl.append(numberEl);




    if ( (i % 3 == 0) && (i % 5 == 0) ) {

       numberEl.innerHTML = "FizzBuzz";

       numberEl.style.backgroundColor = "brown";


    } else if ( i % 5 == 0) {

        numberEl.innerHTML = "Buzz";

        numberEl.style.backgroundColor = "slateBlue";


    } else if ( i % 3 == 0) {

        numberEl.innerHTML = "Fizz";
        
        numberEl.style.backgroundColor = "green";

    } else {
        
        numberEl.innerHTML = i ;

        numberEl.style.backgroundColor = "blue";

    }

}

