// const add= (a, b) => a + b
// console.log(add(20, 50))

const wordFrequency = (phrase) => {
    let frequency = {}
    words = phrase.split(' ')
    for (const word of words) {
        if (word in frequency) {
            frequency[word] += 1
        }
        else {
            frequency[word] = 1
        }
    }
    return frequency
}
// console.log(wordFrequency('lol what lol mo mo mo'))

// const userInput = prompt ('write your sentence')
// console.log(wordFrequency(userInput))

// higher order functions (map - filter - reduce)

const doubleMap = (number) => {
    return number.map(number => number * 2)
}
// console.log(doubleMap([1, 2, 3, 4]))

const filter = (numbers, greaterThan) => {
    let result = []
    for (number of numbers) {
        if (number > greaterThan) {
            result.push(number)
        }
    }
    return result
}
// console.log(filter([1, 2, 3, 4, 5, 6], 2))

// const nums = [1, 2, 3, 4, 5, 6]
// console.log(nums.filter(nums => nums > 2 || nums < 4))

const actors = [
    {name: 'johnny', netWorth: 200000},
    {name: 'amber', netWorth: 10},
    {name: 'matt', netWorth: 170000000},
    {name: 'brad', netWorth: 300000000},
    {name: 'leonardo', netWorth: 1000000},
]
// let result = actors.filter(actor => actor.netWorth > 10)
// console.log(result)
// let names = result.map(actor => actor.name).join(', ')
// console.log(result = actors.reduce((a, b) => a + b.netWorth, 0))
// playground.innerHTML = `<h1>${names}<h1>`

function sum(a, b) {
    return a + b
}

function mul(a, b) {
    return a * b
}
const nums = [1, 2, 3, 4]
// const result = nums.reduce((mul))

// console.log(result)

