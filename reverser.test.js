const reverseString = require('./reverser');

test('check string is reversed', () => {
    expect(reverseString('MyString')).toBe('gnirtSyM');
});
