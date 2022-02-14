// Program for larger & small number

let a = 24,
b = 20,
c = 22,
larger, small, temp;

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

console.log(' Large Number : ' + c );
console.log(' Small Number : ' + a );