function menuItem(name,kcal, gluten, lactose, src){
    this.name = name;
    this.kCal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.img = src;
    this.info = function() {
	 return this.name + ' ' + this.kCal; 
    }
}

let item = new menuItem('FireBurger', '700', 'gluten', 'lactose', 'https://www.mamoli.se/images/meny/hamburgare.png');
let item2 = new menuItem('LegendBurger', '600', 'no', 'no', 'https://www.magnusjonasson.com/wp-content/2010/01/hamburger.png');
let item3 = new menuItem('EpicBurger', '1000', 'gluten','no', 'https://www.magnusjonasson.com/wp-content/2010/01/hamburger.png');
let item4 = new menuItem('Burger', '800', 'no', 'no', 'https://www.magnusjonasson.com/wp-content/2010/01/hamburger.png');
let item5 = new menuItem('BurgerSki', '900', 'gluten','no', 'https://www.magnusjonasson.com/wp-content/2010/01/hamburger.png');

document.getElementById("burger").innerHTML = item.info();
document.getElementById("burger2").innerHTML = item2.info();
document.getElementById("burger3").innerHTML = item3.info();
document.getElementById("burger4").innerHTML = item4.info();
document.getElementById("burger5").innerHTML = item5.info();

console.log(item.info());
console.log(item2.info());
console.log(item3.info());
console.log(item4.info());
console.log(item5.info());

