// Print grade based on marks of a student

let m1 = 60,
m2 = 70,
m3 = 65,
m4 = 74,
total, average;

console.log(' M1 = ' + m1 + ' , ' + ' M2 = ' + m2 + ' , ' + ' M3 = ' + m3 + ' , ' + ' M4 = ' + m4 );

total = m1 + m2 + m3 + m4;

average = total / 4;

if( average >= 80 ){
    console.log('This Student Of A Grade');
}

else if( average >= 50 ){
    console.log('This Student Of B Grade');
}

else if( average >= 35 ){
    console.log('This Student Of C Grade');
}

else{
    console.log('This Student Of FAIL');
}