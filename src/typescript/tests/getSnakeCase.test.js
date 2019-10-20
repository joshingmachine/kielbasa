import getSnakeCase from '../src/getSnakeCase.js'

const strings = [
    ['Hello, world!', 'hello_world'],
    ["Mr. Popper's Penguins", 'mr_poppers_penguins'],
    [
        'Star Wars: Episode V – The Empire Strikes Back',
        'star_wars_episode_v_the_empire_strikes_back',
    ],
]

strings.forEach(string => {
    test(`returns expected snake case string for "${string[0]}"`, () => {
        expect(getSnakeCase(string[0])).toBe(string[1])
    })
})
