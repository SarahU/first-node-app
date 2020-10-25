function reverseString(stringToReverse) {
    let stack = [];

    for (let i = 0; i < stringToReverse.length; i++){
        stack.push(stringToReverse[i]);
    }

    let reversedString = '';
    for (let i = 0; i < stringToReverse.length; i++){
        let character = stack.pop();
        reversedString += character;
    }

    return reversedString;
}
module.exports = reverseString;
