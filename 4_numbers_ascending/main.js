// Ascending & Descending Order of 4 numbers

function solution(){
    let aElement = document.getElementById('a'),
    bElement = document.getElementById('b'),
    cElement = document.getElementById('c'),
    dElement = document.getElementById('d'),
    a, b, c, d, temp;

    a = aElement.value
    b = bElement.value
    c = cElement.value
    d = dElement.value

    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    d = parseInt(d);

    temp = 0;

    if( a > b ){
        temp = a;
        a = b;
        b = temp;
    }

    if( a > c ){
        temp = a;
        a = c;
        c = temp;
    }

    if( a > d ){
        temp = a;
        a = d;
        d = temp;
    }

    if( b > c ){
        temp = b;
        b = c;
        c = temp;
    }

    if( b > d ){
        temp = b;
        b = d;
        d = temp;
    }

    if( c > d ){
        temp = c;
        c = d;
        d = temp;
    }

    console.log( 'Ascending : ' + a, + b, + c, + d );
    console.log( 'Descending : ' + d, + c, + b, + a );

}