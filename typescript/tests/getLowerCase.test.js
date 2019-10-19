import getLowerCase from '../src/getLowerCase.js'

const strings = [
    ['Hello, world!', 'hello, world!'],
    ["Mr. Popper's Penguins", "mr. popper's penguins"],
    [
        'Star Wars: Episode V – The Empire Strikes Back',
        'star wars: episode v – the empire strikes back',
    ],
]

strings.forEach(string => {
    test(`returns expected lower case string for "${string[0]}"`, () => {
        expect(getLowerCase(string[0])).toBe(string[1])
    })
})
