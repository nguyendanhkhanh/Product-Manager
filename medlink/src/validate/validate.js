export function isValidName(text) {
    const isValid = text.toString();
    if (isValid.length >=1 && isValid.length <= 20) {
        return true;
    }
    return false;
}
export function isValidUnit(text) {
    const isValid = text.toString();
    if (isValid.length >=1 && isValid.length <= 20) {
        return true;
    }
    return false;
}
export function isValidLotNumber(text) {
    const isValid = text.toString();
    if (isValid.length >=1 && isValid.length <= 20) {
        return true;
    }
    return false;
}
export function isValidPrice(text) {
    const isValid = text;
    if (isValid >= 1000) {
        return true;
    }
    return false;
}