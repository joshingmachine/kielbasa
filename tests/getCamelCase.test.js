import getCamelCase from '../src/getCamelCase.js'

const strings = [
    ['Hello, world!', 'helloWorld'],
    ["Mr. Popper's Penguins", 'mrPoppersPenguins'],
    [
        'Star Wars: Episode V – The Empire Strikes Back',
        'starWarsEpisodeVTheEmpireStrikesBack',
    ],
]

strings.forEach(string => {
    test(`returns expected camel case string for "${string[0]}"`, () => {
        expect(getCamelCase(string[0])).toBe(string[1])
    })
})
