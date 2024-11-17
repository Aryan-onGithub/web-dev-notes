function one(){
    setTimeout(() => {
        console.log('some');
    }, 0);
}

function two(call){
    console.log('code');
    call();
}

two(one);