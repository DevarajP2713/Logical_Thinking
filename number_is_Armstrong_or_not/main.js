// Check number is Armstrong or not

let n = 153,
rem = 0,
a = 0,
b = 0;

console.log(' N = ' + n );

temp = n;

while( n > 0 ){
    rem = n % 10;
    a = a + ( rem * rem * rem );
    b = n - rem;
    n = b / 10;
}

if( temp == a ){
    console.log( a + ' This Number Is Armstrong');
}

else{
    console.log( a + ' This Number Is Not Armstrong');
}