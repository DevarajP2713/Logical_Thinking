// Print reverse of a number

let n = 7654,
rem = 0,
rev = 0,
a = 0;

console.log(' N = ' + n );

while( n > 0 ){

    rem = n % 10;
    rev = ( rev * 10 ) + rem;
    a = n - rem;
    n = a / 10;

}

console.log('Reverse Number : ' + rev );