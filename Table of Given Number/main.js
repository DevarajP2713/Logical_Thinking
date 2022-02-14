// Table of Given number

function solution(){
    let nElement = document.getElementById('n'),
    n, sum;

    n = nElement.value

    n = parseInt(n);

    sum = 0;

    for( let i = 1 ; i <= 10 ; i++ ){
        sum = n * i;
        console.log( + i + ' x ' + n + ' = ' + sum );
    }
}