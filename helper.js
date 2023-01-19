const SUPPORTED_POW = {
    SQUARE: 2,
    CUBE: 3,
    TO_THE_FOURTH: 4
};

function getElement(elementId) {
    return document.getElementById(elementId);
}

function getValueFromInputElement(elementId) {
    return getElement(elementId).value;
}

function parseStringToFloat(stringValue) {
    if (isNaN(stringValue)) {
        throw new Error(stringValue + " is not a number");
    }
    return parseFloat(stringValue);
}

function calcuatePow(operator, stringValue) {
    if (stringValue === null || stringValue === undefined) {
        throw new Error("Undefined value");
    }
    if (operator === null || stringValue === undefined) {
        throw new Error("Undefined pow operator");
    }

    const powFactor = SUPPORTED_POW[operator.toUpperCase()];
    if (powFactor === undefined) {
        throw new Error("Unsupported pow operator. Value: " + powFactor);
    }
    return Math.pow(parseStringToFloat(stringValue), powFactor);
}

function squareOfNumber(number) {
    return calcuatePow("SQUARE", number);
}

function cubeOfNumber(number) {
    return calcuatePow("CUBE", number);
}

function fourthOfNumber(number) {
    return calcuatePow("TO_THE_FOURTH", number);
}
