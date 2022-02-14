// Calculate Average of given numbers

let n = 100,
sum = 0,
ave;

console.log(' N = ' + n );

for( let i = 1 ; i <= n ; i++ ){

    sum = sum + i;
    ave = sum / n;

}

console.log('Average Of : ' + ave );