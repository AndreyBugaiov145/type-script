const isFetchig: boolean = false
const isLoading: boolean = false

let int: number = 12
let int2: number = 12.2
let int3: number = 12e10

const str: string = 'hello Type script'

const numberArray: number[] = [1, 5, 3, 4, 8, 4]
const numberArray2: Array<number> = [1, 5, 3, 4, 8, 4]

const words: string[] = ['sdfsd', 'sdfgf']

//Tuple
const contact: [string, number] = ['Andrey', 655783]

// Any
let variable: any = 42
//...
variable = 'newStr'

//=========

function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('andrey')

//Never

function trowError(massage: string): never {
    throw new Error('some Error by  me')
}

function inifinite(): never {
    while (true){

    }
}

//Type

type Login  = string;
const log:Login = 'sdfsdfsdf';

type ID = string | number
let id1:ID = 1145
let id2:ID = 'asdasd'

type SomeType = string |null | undefined