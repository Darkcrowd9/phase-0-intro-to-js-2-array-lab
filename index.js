// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const Buzz=[...cats, name]
    return Buzz
}
function prependCat(name) {
    const Toby=[name, ...cats]
    return Toby
}
function removeLastCat() {
    const Devin=cats.slice(0,-1);
    return Devin
}
function removeFirstCat() {
    const Anya=cats.slice(1);
    return Anya
}