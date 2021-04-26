const links = [
     {  label: "Week 1",        url: "week1/week1index"    },
     {  label: "Week 2",        url: "week2/week2index"    }
     
]

function pageLoad () {
  
  //Create the element
  var a = document.createElement("a"); 
  var linkText = document.createTextNode("Week 1");
  a.appendChild(linkText);
  a.title = "This is the week 1 Link";
  a.href = "week1/week1index.html";

  var y = document.createElement("LI");
  y.appendChild(a);
  document.getElementById("dynamic").appendChild(y);
}

function testFunction () {
   document.getElementById("demo").innerHTML= "yo";
}
