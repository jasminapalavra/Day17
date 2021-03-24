let foo = 12, boo = 45;

function main(foo, boo) {

const [a, b] = [foo, boo];
[foo, boo] = [boo, foo];


return {foo, boo};
}


console.log(main(foo, boo));
module.exports = main;