// Program to find marriage eligibility

let gender = 'male',
age = 25;

console.log(' Gender = ' + gender + ' , ' + ' Age = ' + age );

if( ( gender == "male" ) && ( age >= 24 ) ){
    console.log('You Can Marry');
}

else if( ( gender == "female" ) && ( age >= 21 ) ){
    console.log('You Can Marry');
}

else{
    console.log('You Can Not Marry');
}