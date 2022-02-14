// Integer In Words of Given Number

function solution(){
    let nElement = document.getElementById('n'),
    n;

    n = nElement.value

    n = parseInt(n);

    rem = 0;
    rev = 0;
    a = 0;

    while( n > 0 ){

        rem = n % 10;
        rev = ( rev * 10 ) + rem;
        a = n - rem;
        n = a / 10;
 
    }

    num = rev;
    rev1 = 0;

    while( num > 0 ){

        rem = num % 10;
        rev1 = ( rev1 * 10 ) + rem;
        a = num - rem;
        num = a / 10;

        if( rem == 0 ){
            console.log("ZERO");
        }

        else if( rem == 1 ){
            console.log("ONE");
        }

        else if( rem == 2 ){
            console.log("TWO");
        }

        else if( rem == 3 ){
            console.log("THREE");
        }

        else if( rem == 4 ){
            console.log("FOUR");
        }

        else if( rem == 5 ){
            console.log("FIVE");
        }

        else if( rem == 6 ){
            console.log("SIX");
        }

        else if( rem == 7 ){
            console.log("SEVEN");
        }

        else if( rem == 8 ){
            console.log("EIGHT");
        }

        else{
            console.log("NINE");
        }

    }

}