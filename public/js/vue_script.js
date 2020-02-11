window.onload = function(){

   

    const vm = new Vue({
	el: '#burgare1',
	data: {
	    titleburgare1: food[0].name,
	    pic1: food[0].img,
	    info1: [food[0].kCal, "Tasty cheeseburger" ,food[0].gluten,food[0].lactose], 
	    
	    
	}
	
    });
    const vm1 = new Vue({
	el: '#burgare2',
	data: {
	    titleburgare2: food[1].name,
	    pic2: food[1].img,
	    info2: [food[1].kCal, "Tasty Vegan Burger" , food[1].gluten, food[1].lactose], 
	    
	    
	}
	
    });
    const vm3 = new Vue({
	el: '#burgare3',
	data: {
	    titleburgare3: food[2].name,
	    pic3: food[2].img,
	    info3: [food[2].kCal, "The best burger" , food[2].gluten, food[2].lactose],
	    
	    
	}
	
    });

    const vm123 = new Vue({
	el: '#gender',
	data: {
	    Gender: "other"
	}
    })
    const vm4= new Vue({
	el: '#orders',
	data: {
	    name: '' ,
	    email: '' ,
	    adress: '' ,
	    hnumber: '' ,
	    recipient: '',
	    Gender: '',
	    Burger1: '' ,
	    Burger2: '' ,
	    Burger3: '' 
	    
	} ,
	methods: {
            markDone: function() {
	
		vm4.name = document.getElementById("name").value;
		vm4.email = document.getElementById("email").value;
		vm4.adress = document.getElementById("adress").value;
		vm4.hnumber = document.getElementById("hnumber").value;
		vm4.Gender = vm123.Gender;
		vm4.recipient = document.getElementById("recipient").value;

		if(document.getElementById("checkbox1").checked){
		    vm4.Burger1 = "Cheeseburger";
		}
		else {
		        vm4.Burger1 = "";
		
		}
		if(document.getElementById("checkbox2").checked){
		    vm4.Burger2 = "VeganBurger";
		}
		else {
		        vm4.Burger2 = "";
		
		}
		if(document.getElementById("checkbox3").checked){
		    vm4.Burger3 = "EpicBurger";
		}
		else {
		        vm4.Burger3 = "";
		
		}

	    }
	} 
	
    });
    

      

       

}
