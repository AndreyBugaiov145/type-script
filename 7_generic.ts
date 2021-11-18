const ArrayOfNumbers: Array<number> = [1, 2, 3, 44, 4]
const ArrayOfString: Array<string> = ['asda', 'asdas']

function reverse<T>(array: T[]): T[] { // T динамический параметр кооторый будет подстраиваться под значениея которые передаем
    return array.reverse()
}

reverse(ArrayOfString)
reverse(ArrayOfNumbers)
reverse(12) //- fail

