import getPascalCase from '../src/getPascalCase.js'

const strings = [
    ['Hello, world!', 'HelloWorld'],
    ["Mr. Popper's Penguins", 'MrPoppersPenguins'],
    [
        'Star Wars: Episode V – The Empire Strikes Back',
        'StarWarsEpisodeVTheEmpireStrikesBack',
    ],
]

strings.forEach(string => {
    test(`returns expected Pascal case string for "${string[0]}"`, () => {
        expect(getPascalCase(string[0])).toBe(string[1])
    })
})
