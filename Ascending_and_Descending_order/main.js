// Ascending and Descending order of 3 numbers

let a = 24,
b = 20,
c = 22,
temp;

console.log(' A = ' + a + ' , ' + ' B = ' + b + ' , ' + ' C = ' + c );

if( a > b ){
    temp = a;
    a = b;
    b = temp;
}

if( a > c ){
    temp = a;
    a = b;
    b = temp;
}

if( b > c ){
    temp = b;
    b = c;
    c = temp;
}

console.log(' Ascending : ' + a + ' , ' + b + ' , ' + c );
console.log(' Descending : ' + c + ' , ' + b + ' , ' + a );