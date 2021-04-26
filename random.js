const links = [
     {  label: "Week 1",        url: "week1/week1index"    },
     {  label: "Week 2",        url: "week2/week2index"    }
     
]

function pageLoad () {
  
  
  var a = document.createElement("A"); 
  a.setAttribute("href", "week1/week1index");
  var b = document.createTextNode("Week 1");
  a.appendChild(b);
 
  
  
  var y = document.createElement("LI");
  var t = document.createTextNode(a);
  y.appendChild(t);
  document.getElementById("dynamic").appendChild(y);
}

function testFunction () {
   document.getElementById("demo").innerHTML= "yo";
}
