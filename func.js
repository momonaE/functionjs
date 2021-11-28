function sum(para) {
    let total = 0;
    para.filter(a => a > 20).map(function(s) {
        total += s;
    });
    return total;
}
let d = [0, 25, 26, 5];

console.log(sum(d));


const getNewArray = function(x) {
    return x.filter(a => a.length >= 5 & a.includes('a'));
}

let e = getNewArray(['muna', "munaa", "hjkdla", "hj"]);
console.log(e);