function menuItem(name,kcal, allergi, src){
    this.name = name;
    this.kCal = kcal;
    this.allergis = allergi; 
    this.img = src;
    this.info = function() {
	 return this.name + ' ' + this.kCal; 
    }
}

let item = new menuItem('FireBurger', '700', 'Gluten and Lactose', 'https://www.mamoli.se/images/meny/hamburgare.png');
let item2 = new menuItem('LegendBurger', '600', false , 'https://www.magnusjonasson.com/wp-content/2010/01/hamburger.png');
let item3 = new menuItem('EpicBurger', '1000', 'Gluten', 'https://www.magnusjonasson.com/wp-content/2010/01/hamburger.png');
let item4 = new menuItem('Burger', '800', false, 'https://www.magnusjonasson.com/wp-content/2010/01/hamburger.png');
let item5 = new menuItem('BurgerSki', '900', 'Gluten', 'https://www.magnusjonasson.com/wp-content/2010/01/hamburger.png');

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
 
