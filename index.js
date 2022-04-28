document.getElementById("msg").addEventListener("load", forStarters());


function gen(x) {

    let num = Math.floor(Math.random() * x.length)
    console.log(num);
    return num;
}

function randy() {
    console.log(num = Math.ceil(Math.random() * 7))
    return num;
}

function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}


function forStarters() {
    let div = document.createElement('div');
    div.id = 'eightBallOuter';
    document.getElementById('msg').appendChild(div);
    let h1 = document.createElement('h1');
    document.getElementById('eightBallOuter').appendChild(h1);
    let ol = document.createElement('ol');
    h1.id = 'eightBallInner';
    document.getElementById('msg').appendChild(ol);
    const balls = ['', 'yellow', 'blue', 'red', 'purple', 'orange', 'darkgreen', '#800020', 'black'];

    //noun array of arrays - 1st is first person, plural/sing; third person plural, second person
    //                        2nd is 2nd person sinular Proper and pronouns                                                                          
    const nouns = [
        ['We', 'I', 'They', 'You'],
        ['He', 'She', 'Joe', 'Dave', 'Mom', 'Dad', 'Mia', 'Grandma']
    ];
    //verb array of arrays - diff conjugation
    const verbs = [
        ['play', 'hear', 'see', 'like', 'hate', 'tolerate'],
        ['plays', 'hears', 'sees', 'likes', 'hates', 'tolerates']
    ];
    // obj array of (part of speech) objects
    const objects = ['drums', 'pianos', 'guitars', 'cards', 'games', 'tricks'];
    const puncts = ['.', '!', '?', '!!!', '??'];
    // gen function takes array name and returns random index base on length of  array. Default returns random # 1-10

    let person = '';

    // person determines 'voice'
    // a random # of grammatically correct sentences assembled at random. 
    let randNum = randy()
    for (i = 0; i <= randNum; i++) {
        person = gen(nouns);
        let noun = nouns[person][gen(nouns[person])];
        let verb = verbs[person][gen(verbs[person])];
        let obj = objects[gen(objects)];
        let punct = puncts[gen(puncts)];
        ol.appendChild(createMenuItem(`${noun} ${verb} ${obj}${punct}`));
        //    console.log(myHTML);


    }
    dispNum = randNum + 1;
    document.getElementById('eightBallInner').innerHTML = dispNum;

    document.getElementById('eightBallOuter').style.backgroundColor = balls[dispNum];
}