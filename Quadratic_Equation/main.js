// Program for Quadratic Equation

let a = 2,
b = -5,
c = 3,
r, y, x1, x2;

console.log(' A = ' + a + ' , ' + ' B = ' + b + ' , ' + " C = " + c );

y = ( b * b ) - ( 4 * a * c );

r = Math.sqrt(y);

x1 = ( - b + r ) / ( 2 * a );

x2 = ( - b - r ) / ( 2 * a );

if( y > 0 ){ 
    console.log('nRoots are Unequal');
}

else if( y < 0 ){
    console.log('nRoots are Imaginary');
}

else{
    console.log('nRoots are same');
}

console.log(' Y = ' + y );
console.log(' R = ' + r );
console.log(' X1 = ' + x1 );
console.log(' X2 = ' + x2 );