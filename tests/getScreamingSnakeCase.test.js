import getScreamingSnakeCase from '../src/getScreamingSnakeCase.js'

const strings = [
    ['Hello, world!', 'HELLO_WORLD'],
    ["Mr. Popper's Penguins", 'MR_POPPERS_PENGUINS'],
    [
        'Star Wars: Episode V – The Empire Strikes Back',
        'STAR_WARS_EPISODE_V_THE_EMPIRE_STRIKES_BACK',
    ],
]

strings.forEach(string => {
    test(`returns expected screaming snake case string for "${
        string[0]
    }"`, () => {
        expect(getScreamingSnakeCase(string[0])).toBe(string[1])
    })
})
