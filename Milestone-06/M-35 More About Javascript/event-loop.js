function a() {
    console.log('a');
    b()
    console.log('aa')
};
function b() {
    console.log('b');
    c()
    console.log('bb')
};
function c() {
    console.log('c')
}

function x(){
    console.log('x');
    console.log('xx')
    y()
}
function y(){
    console.log('y');
    console.log('yy')
    z()
}

function z(){
    console.log('z');
    console.log('zz')
}


a()
x()


async function f() {
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
    });
    result = await promise;
    console.log(result);
}
f();

