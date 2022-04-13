const noun = [
    ['We', 'I', 'They', 'You'],
    ['He', 'She', 'Joe', 'Dave', 'Mom', 'Dad', 'Mia', 'Grandma']
];

const verb = [
    ['play', 'hear', 'see', 'like', 'hate', 'tolerate'],
    ['plays', 'hears', 'sees', 'likes', 'hates', 'tolerates']
];
const obj = ['drums', 'pianos', 'guitars', 'cards', 'games', 'tricks'];
const punct = ['.', '!', '?', '!!!', '??'];

function gen(x) {
    let y = 10;
    if (x) {
        y = x.length;
    }
    return Math.floor(Math.random() * y)
}
let person = '';
/*console.log(noun[1].length)
console.log(noun[0].length)
console.log(verb.length)
console.log(obj.length)
    //console.log(gen(noun))*/
for (i = 0; i < gen(); i++) {
    person = gen(noun);
    console.log(`${noun[person][gen(noun[person])]} ${verb[person][gen(verb[person])]} ${obj[gen(obj)]}${punct[gen(punct)]}`)
}