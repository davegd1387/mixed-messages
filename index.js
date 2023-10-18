const balls = [
  "",
  "yellow",
  "blue",
  "red",
  "purple",
  "orange",
  "darkgreen",
  "#800020",
  "black",
];

//noun array of arrays - 1st is first person, plural/sing; third person plural, second person
//                        2nd is 2nd person sinular Proper and pronouns
const nouns = [
  ["We", "I", "They", "You"],
  ["He", "She", "Joe", "Dave", "Mom", "Dad", "Mia", "Grandma"],
];
//verb array of arrays - diff conjugation
const verbs = [
  ["play", "hear", "see", "like", "hate", "tolerate"],
  ["plays", "hears", "sees", "likes", "hates", "tolerates"],
];
// obj array of (part of speech) objects
const objects = ["drums", "pianos", "guitars", "cards", "games", "tricks"];
const puncts = [".", "!", "?", "!!!", "??"];

document.getElementById("msg").addEventListener("load", forStarters());

// gen function takes array name and returns random index base on length of  array. Default returns random # 1-10
function gen(x) {
  let num = Math.floor(Math.random() * x.length);
  // console.log(`inside gen ${num}`);
  return num;
}

function randy() {
  num = Math.ceil(Math.random() * 7);
  // console.log(`inside randy ${num}`);
  return num;
}

function createMenuItem(name) {
  let li = document.createElement("li");
  li.textContent = name;
  return li;
}

function forStarters() {
  let outdiv = document.createElement("div");
  outdiv.id = "outer";
  let button = document.createElement("BUTTON");
  button.id = "refresh";
  let t = document.createTextNode("REFRESH");
  button.appendChild(t);
  document.getElementById("msg").appendChild(outdiv);
  let indiv = document.createElement("div");
  document.getElementById("outer").appendChild(indiv);

  let ol = document.createElement("ol");
  ol.id = "ol";
  indiv.id = "inner";
  let h1 = document.createElement("h1");
  h1.id = "h1";
  document.getElementById("inner").appendChild(h1);
  document.getElementById("msg").appendChild(ol);
  document.getElementById("msg").appendChild(button);
  process();
  document.getElementById("refresh").onclick = process;
}

function process() {
  let ol = document.getElementById("ol");
  while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
  }
  let person = "";

  // person determines 'voice'
  // a random # of grammatically correct sentences assembled at random.
  let randNum = randy();

  for (i = 0; i <= randNum; i++) {
    person = gen(nouns);
    let noun = nouns[person][gen(nouns[person])];
    let verb = verbs[person][gen(verbs[person])];
    let obj = objects[gen(objects)];
    let punct = puncts[gen(puncts)];
    // document
    //   .getElementById("ol")
    ol.appendChild(createMenuItem(`${noun} ${verb} ${obj}${punct}`));
    //    console.log(myHTML);
  }
  dispNum = randNum + 1;
  document.getElementById("h1").innerHTML = dispNum;

  document.getElementById("outer").style.backgroundColor = balls[dispNum];
  document.getElementById("refresh").style.borderColor = balls[dispNum];
  document.getElementById("refresh").style.borderWidth = "10px";
  document.getElementById("refresh").style.backgroundColor = "white";
  document.getElementById("refresh").style.color = "black";
}
