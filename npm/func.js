//모듈을 함수형으로. 중복된 기능 활용하게 하려고.
let number = 0;
module.exports = () => {
    return (number += 1);
};
