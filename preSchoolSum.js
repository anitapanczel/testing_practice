/*window.addEventListener("load", init);

function init() {
}*/

console.log("hello world");

const preSchoolSum = (num1, num2) => {

    let result = Math.floor(num1 + num2);

    if (result < 0) return 0;
    if (result > 10) return "sok";
    
    return result;
    
}

module.exports = preSchoolSum;



