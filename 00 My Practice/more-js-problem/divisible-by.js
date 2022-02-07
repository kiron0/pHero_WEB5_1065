for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar');
        // console.log('Divisible by 3 & 5');
    }
    else if (i % 3 == 0) {
        console.log('foo');
        // console.log('Divisible by 3');
    }
    // else if (i % 2 == 0) {
    //     console.log('Divisible by 2');
    // }
    else if (i % 5 == 0) {
        console.log('bar');
        // console.log('Divisible by 5');
    }
    else if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar');
        // console.log('Divisible by 3 & 5');
    }
    else {
        console.log(i);
    }
}