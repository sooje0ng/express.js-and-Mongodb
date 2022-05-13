//기본실행
//계산기 작성
const cal = require("./cal");
//require함수 : 한번만 호출되고 사라짐
const func = require("./func");

console.log(cal.add(5, 3));
console.log(cal.sub(5, 3));
console.log(cal.mul(5, 3));

// module.exports = {
//     add: add,
//     sub: sub,
//     mul:mul
// } 이렇게도 가능!

//같은 기능을 여러번 중복적으로 사용하고 싶다면? module.exports자체를 함수로 만들면 댐
for (let i = 0; i < 10; i++) {
    console.log(func());
}
