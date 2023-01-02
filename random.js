const links = [
     {  label: "NEGL Page",        url: "NEGL/NeglMainIndex.html"    },
     {  label: "AlcalaU",        url: "AlcalaU/university.html"    }
     
]
const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};
console.log(superman.fly());
console.log(superman.name);
console.log(superman['weight']);
console.log(superman['real name']);
console.log(superman.allies[1]);
console.log('city' in superman);  //is city in superman object.
console.log(superman.city !== undefined);
console.log(superman.hasOwnProperty('name'));
console.log();
for(const key in superman) {
    console.log(key + ": " + superman[key]);
}

console.log(superman);

for(const key in superman) {
    if(superman.hasOwnProperty(key)){
        console.log(key + ": " + superman[key]);
    }
}

function addToIndex() {
    for (let i = 0; i < links.length; i++ ) {
      var a = document.createElement("a");
      var linkText = document.createTextNode(links[i].label);
      a.appendChild(linkText);
      a.title = "This is the " + links[i].label + " link";
      a.href = links[i].url;
      var y = document.createElement("LI");
      y.appendChild(a);
      document.getElementById("indexList").appendChild(y);
    }
}

function testFunction () {
   document.getElementById("demo").innerHTML= "yo";
}

function greet({greeting,name,age}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}

console.log(greet({ greeting: `What's up dude`, age: 10, name: `Bart` }));

const dice = {
    sides: 20,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

console.log(dice.roll());


const wonderWoman = {
    name: 'Wonder Woman',
    'real name': 'Diana Prince',
    height: 72,
    weight: 165,
    hero: true,
    villain: false,
    allies: ['Wonder Girl','Donna Troy','Superman'],
    lasso: function(){
        console.log('You will tell the truth!');
    }
}

console.log(JSON.stringify(wonderWoman));
console.log(JSON.stringify(wonderWoman, null, " "));
