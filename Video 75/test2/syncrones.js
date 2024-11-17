console.log('step 1');
setTimeout(() => {
    console.log('step2');
}, 0); //will always show last because of asyncrone nature

console.log('step3');

