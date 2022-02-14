// Print prime numbers within range

let n = 50;

console.log(' N = ' + n );

for( let i = 2 ; i <= n ; i++ ){

    let a = 0;

    for( let j = 2 ; j <= i / 2 ; j++ ){

        if( i % j == 0 ){
            a = 1;
        }

    }

    if( a == 0 ){
        console.log( ' Prime No : ' + i );
    }

}