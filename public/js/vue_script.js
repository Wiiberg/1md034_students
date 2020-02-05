window.onload = function(){


    const vm = new Vue({
	el: '#burgare1',
	data: {
	    titleburgare1: food[0].name,
	    pic1: food[0].img,
	    info1: [food[0].kCal, "Tasty cheeseburger" ,food[0].gluten,food[0].lactose], 
	    
	     
	}
   
    })
    const vm1 = new Vue({
	el: '#burgare2',
	data: {
	    titleburgare2: food[1].name,
	    pic2: food[1].img,
	    info2: [food[1].kCal, "Tasty Vegan Burger" , food[1].gluten, food[1].lactose], 
	    
	     
	}
   
     })
    const vm3 = new Vue({
	el: '#burgare3',
	data: {
	    titleburgare3: food[2].name,
	    pic3: food[2].img,
	    info3: [food[2].kCal, "The best burger" , food[2].gluten, food[2].lactose],
	    
	     
	}
   
     })
}
