// function add(a: number, b: number): number {
//     return a + b
// }
function tooUpper(srt) {
    return srt.toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: 'defff' };
    }
    return { x: a, y: b };
}
console.log('empty', position());
console.log('one', position(40));
console.log('twoo', position(10, 15));
