window.onload = function(){


    const vm = new Vue({
	el: '#burgare1',
	data: {
	    titleburgare1: "FireBurger",
	    pic1: "https://www.mamoli.se/images/meny/hamburgare.png",
	    info1: ["700 kCal", "Tasty cheeseburger" ,"Gluten och lactose"] 
	    
	     
	}
   
    })
    const vm1 = new Vue({
	el: '#burgare2',
	data: {
	    titleburgare2: "Legend Burger",
	    pic2: "https://www.mamoli.se/images/meny/hamburgare.png",
	    info2: ["600 kCal", "Tasty Vegan Burger" ,"Gluten"] 
	    
	     
	}
   
     })
    const vm3 = new Vue({
	el: '#burgare3',
	data: {
	    titleburgare3: "Epic Burger",
	    pic3: "https://www.mamoli.se/images/meny/hamburgare.png",
	    info3: ["1000 kCal", "The best burger" ,"Lactose"] 
	    
	     
	}
   
     })
}
