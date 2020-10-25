function reverseString(stringToReverse) {
    let stack = [];

    const characters = Array.from(stringToReverse);
    characters.map(x => stack.push(x));

    let reversedString = '';
    stack.reverse();
    stack.map(x => reversedString+= x);

    return reversedString;
}
module.exports = reverseString;
