const test = (expected, actual, description) => {
    console.log(description);
    if (expected === actual) {
        console.log("success");
    } else {
        console.log("error");
    }
    console.log("------------");
};

module.exports = test;