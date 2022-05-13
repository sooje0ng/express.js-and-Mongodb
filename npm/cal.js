//덧셈,뺄셈,곱셈

//덧셈

function add(a, b) {
    return a + b;
}
module.exports.add = add; //모듈화해서 바깥쪽으로 빼갰다!

const sub = (a, b) => {
    return a - b;
};
module.exports.sub = sub; //모듈화해서 바깥쪽으로 빼갰다!
const mul = (a, b) => {
    return a * b;
};
module.exports.mul = mul; //모듈화해서 바깥쪽으로 빼갰다!
