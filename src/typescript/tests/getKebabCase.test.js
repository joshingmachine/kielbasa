import getKebabCase from '../src/getKebabCase.js'

const strings = [
    ['Hello, world!', 'hello-world'],
    ["Mr. Popper's Penguins", 'mr-poppers-penguins'],
    [
        'Star Wars: Episode V – The Empire Strikes Back',
        'star-wars-episode-v-the-empire-strikes-back',
    ],
]

strings.forEach(string => {
    test(`returns expected kebab case string for "${string[0]}"`, () => {
        expect(getKebabCase(string[0])).toBe(string[1])
    })
})
