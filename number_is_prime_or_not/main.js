// Check number is prime or not

let n = 11,
a = 0;

console.log(' N = ' + n );

for( let i = 2 ; i <= n / 2 ; i++ ){

    if( n % i == 0 ){
        a = 1;
    }

}

if( a == 0 ){
    console.log( n + ' Is Prime No');
}

else{
    console.log( n + ' Is Not Prime No');
}