function add(a: number, b: number): number {
    return a + b
}

function tooUpper(srt: string): string {
    return srt.toUpperCase()
}

interface Myposition {
    x: number | undefined
    y: number | undefined
}

interface MypositionWithDefault extends Myposition {
    default: string
}

function position(): Myposition
function position(a: number): MypositionWithDefault
function position(a: number, b: number): Myposition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }
    if (a && !b) {
        return {x: a, y: undefined, default: 'defff'}
    }

    return {x: a, y: b}
}

console.log('empty', position())
console.log('one', position(40))
console.log('twoo', position(10, 15))