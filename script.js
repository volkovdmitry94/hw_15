// Test data
const strArray1 = ["aaa","bbb","ccc","ddd"];
const numArray = [45,7,6,32,5,3,6,3,2,4,6,4,2];
const strArray2 = ["hello","world","I","am","a","JS","developer"];

// Functions for onclick event
function test1() {
    let resArr = ["lll","mmm"];
    arrayCopy(strArray1, 1, resArr, 0, 3);
    console.log('Task 1:');
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll","mmm"];
    arrayCopy(strArray1, 3, resArr, 1, 1);
    console.log(resArr); // expected ["lll","ddd","mmm"]
}
function test2() {
    console.log('Task 2:');
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray,6)); // expected 3
    console.log(count(numArray,-10)); // expected 0
}
function test3() {
    console.log('Task 3:');
    displayOccurrences(strArray1);
    displayOccurrences(numArray);
}
function test4() {
    const res = ulSurround(strArray1);
    console.log('Task 4:');
    console.log(res);
}
function test5() {
    const res = lengthSort(strArray2);
    console.log('Task 5:');
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}
// Function for implementation

function arrayCopy(src, srcPos, dst, dstPos, length) {
    const arrForCopy = src.slice(srcPos, srcPos + length);
    dst.splice(dstPos, 0, ...arrForCopy);
}

function count(array, str) {
    return array.reduce(function(sum, item) {
        return (item === str) ? ++sum : sum;
    }, 0);
}

function displayOccurrences(array) {
    let arrayUniqueValues = array.filter(function(item, index) {
        return array.indexOf(item) === index;
    });

    arrayUniqueValues.forEach(function(item) {
        const countNum = count(array, item);
        console.log(`${item} -> ${countNum}`);
    });
}

function ulSurround(strings) {
    const ulSurrounding = ["<ul>", "</ul>"];

    const arrWithLi = strings.map(function(item) {
        return "<li>" + item + "</li>";
    });

    ulSurrounding.splice(1,0, ...arrWithLi);
    return ulSurrounding;
}

function lengthSort(array) {
    return array.sort(function(a,b) {
        return a.length - b.length;
    });
}
