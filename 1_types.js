var isFetchig = false;
var isLoading = false;
var int = 12;
var int2 = 12.2;
var int3 = 12e10;
var str = 'hello Type script';
var numberArray = [1, 5, 3, 4, 8, 4];
var numberArray2 = [1, 5, 3, 4, 8, 4];
var words = ['sdfsd', 'sdfgf'];
//Tuple
var contact = ['Andrey', 655783];
// Any
var variable = 42;
//...
variable = 'newStr';
//=========
function sayMyName(name) {
    console.log(name);
}
sayMyName('andrey');
//Never
function trowError(massage) {
    trow;
    new Error('some Error by  me');
}
