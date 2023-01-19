// using value from those text box rather than using default value [2, 3, 4]
function modifyOriginalArray() {
    try {
        origArray = [];
        origArray.push(
            parseStringToFloat(getValueFromInputElement("first-number"))
        );
        origArray.push(
            parseStringToFloat(getValueFromInputElement("second-number"))
        );
        origArray.push(
            parseStringToFloat(getValueFromInputElement("third-number"))
        );
    } catch (e) {
        console.log("Something went wrong while building origArray. Message: " + e.message);
    }
}

// let origArray = [2, 3, 4]; using this line whenever function modifyOriginalArray is used; 

const origArray = [2, 3, 4];
displayResult(origArray);

function displayResult(resultArray) {
    console.log("Result Arrays: " + resultArray);
    getElement("first-number").value = resultArray[0];
    getElement("second-number").value = resultArray[1];
    getElement("third-number").value = resultArray[2];
}

function calculateSquare() {
    let resultArray = origArray.map(squareOfNumber);
    displayResult(resultArray);
}

let calculateCubeFunction = function(_) {
    let resultArray = origArray.map(cubeOfNumber);
    displayResult(resultArray);
}

function calculateFourth(_) {
    let resultArray = origArray.map(fourthOfNumber);
    displayResult(resultArray);
}

document.addEventListener("DOMContentLoaded", function(_) {

    getElement("cube-button").addEventListener("click", calculateCubeFunction);
    getElement("to-the-fourth-button").addEventListener("click", calculateFourth);
});
