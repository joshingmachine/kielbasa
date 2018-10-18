import getTrainCase from '../src/getTrainCase.js'

const strings = [
    ['Hello, world!', 'HELLO-WORLD'],
    ["Mr. Popper's Penguins", 'MR-POPPERS-PENGUINS'],
    [
        'Star Wars: Episode V – The Empire Strikes Back',
        'STAR-WARS-EPISODE-V-THE-EMPIRE-STRIKES-BACK',
    ],
]

strings.forEach(string => {
    test(`returns expected train case string for "${string[0]}"`, () => {
        expect(getTrainCase(string[0])).toBe(string[1])
    })
})
