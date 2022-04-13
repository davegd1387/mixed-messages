//noun array of arrays - 1st is first person, plural/sing; third person plural, second person
//                        2nd is 2nd person sinular Proper and pronouns                                                                          
const noun = [
    ['We', 'I', 'They', 'You'],
    ['He', 'She', 'Joe', 'Dave', 'Mom', 'Dad', 'Mia', 'Grandma']
];
//verb array of arrays - diff conjugation
const verb = [
    ['play', 'hear', 'see', 'like', 'hate', 'tolerate'],
    ['plays', 'hears', 'sees', 'likes', 'hates', 'tolerates']
];
// obj array of (part of speech) objects
const obj = ['drums', 'pianos', 'guitars', 'cards', 'games', 'tricks'];
const punct = ['.', '!', '?', '!!!', '??'];
// gen function takes array name and returns random index base on length of  array. Default returns random # 1-10
function gen(x) {
    let y = 10;
    if (x) {
        y = x.length;
    }
    return Math.floor(Math.random() * y)
}
let person = '';

// person determines 'voice'
// a random # of grammatically correct sentences assembled at random. 
for (i = 0; i < gen(); i++) {
    person = gen(noun);
    console.log(`${noun[person][gen(noun[person])]} ${verb[person][gen(verb[person])]} ${obj[gen(obj)]}${punct[gen(punct)]}`)
}