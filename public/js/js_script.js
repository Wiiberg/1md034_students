
/*
let menu = [item,item2,item3,item4,item5];

let myElement = document.getElementById("list");
for (var i = 0 ; i < menu.length; i++)
{
	
        let listItem = document.createElement("li");
        let listValue = document.createTextNode(menu[i].name);
       listItem.appendChild(listValue);

       if(menu[i].allergis != false){
      	   let listValue2 = document.createTextNode(' ' +menu[i].allergis);
           listItem.appendChild(listValue2);
       }
    myElement.appendChild(listItem)
}

let firstName = document.createElement("h2");
firstName.innerHTML= "Fireburger";
document.getElementById("burgare1").appendChild(firstName);

let firstImage = document.createElement("img");
firstImage.src = "https://www.mamoli.se/images/meny/hamburgare.png"
document.getElementById("burgare1").appendChild(firstImage);

let info = ["Tasty cheeseburger", " 700 calories", "Gluten and lactose"];
let myElement = document.getElementById("burgare1");
for (var i = 0 ; i < info.length; i++)
{
    let listItem = document.createElement("li");
    let listValue = document.createTextNode(info[i]);
    if(listValue == "Gluten" || listValue == "Lactose" || listValue == "Gluten and lactose"){
	listValue = listValue.fontcolor("red");
    }
    listItem.appendChild(listValue);
    myElement.appendChild(listItem)
}
//burgare 2

let secondName = document.createElement("h2");
secondName.innerHTML= "Legend Burger";
document.getElementById("burgare2").appendChild(secondName);

let secondImage = document.createElement("img");
secondImage.src = "https://www.magnusjonasson.com/wp-content/2010/01/hamburger.png"
document.getElementById("burgare2").appendChild(secondImage);

let info2 = ["Tasty vegan burger", " 600 calories", "Gluten"];
let myElement2 = document.getElementById("burgare2");
for (var i = 0 ; i < info2.length; i++)
{
    let listItem2 = document.createElement("li");
    let listValue2 = document.createTextNode(info2[i]);
    listItem2.appendChild(listValue2);
    myElement2.appendChild(listItem2)
}

//burgare 3
let name3 = document.createElement("h2");
name3.innerHTML= "Epic Burger";
document.getElementById("burgare3").appendChild(name3);

let image3 = document.createElement("img");
image3.src = "https://www.magnusjonasson.com/wp-content/2010/01/hamburger.png"
document.getElementById("burgare3").appendChild(image3);

let info3 = ["The perfect burger", " 1000 calories", "Free from gluten"];
let myElement3 = document.getElementById("burgare3");
for (var i = 0 ; i < info2.length; i++)
{
    let listItem3 = document.createElement("li");
    let listValue3 = document.createTextNode(info3[i]);
    listItem3.appendChild(listValue3);
    myElement3.appendChild(listItem3);
}

*/
/*
let myButton = document.getElementById('myButtonID');

myButton.onclick = function () {
    console.log("Button Clicked");
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("adress").value);
    console.log(document.getElementById("hnumber").value);
    console.log(document.getElementById("recipient").value);
    let array = [document.getElementById("name").value, document.getElementById("email").value, document.getElementById("hnumber").value, document.getElementById("hnumber").value , document.getElementById("recipient").value];
console.log(array);
}
*/
