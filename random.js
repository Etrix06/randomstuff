const links = [
     {  label: "NEGL Page",        url: "NEGL/NeglMainIndex.html"    },
     {  label: "Week 2",        url: "week2/week2index"    }
     
]

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
