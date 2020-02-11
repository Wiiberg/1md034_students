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
    

    /* jslint es6:true, indent: 2 */
    /* global Vue, io */
    /* exported vm */
    'use strict';
    const socket = io();

    /* eslint-disable-next-line no-unused-vars */
    const vm7 = new Vue({
	el: '#dots',
	data: {
	    orders: {},
	},
	created: function() {
	    /* When the page is loaded, get the current orders stored on the server.
	     * (the server's code is in app.js) */
	    socket.on('initialize', function(data) {
		this.orders = data.orders;
	    }.bind(this));

	    /* Whenever an addOrder is emitted by a client (every open map.html is
	     * a client), the server responds with a currentQueue message (this is
	     * defined in app.js). The message's data payload is the entire updated
	     * order object. Here we define what the client should do with it.
	     * Spoiler: We replace the current local order object with the new one. */
	    socket.on('currentQueue', function(data) {
		this.orders = data.orders;
	    }.bind(this));
	},
	methods: {
	    getNext: function() {
		/* This function returns the next available key (order number) in
		 * the orders object, it works under the assumptions that all keys
		 * are integers. */
		let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
		    return Math.max(last, next);
		}, 0);
		return lastOrder + 1;
	    },
	    addOrder: function(event) {
		/* When you click in the map, a click event object is sent as parameter
		 * to the function designated in v-on:click (i.e. this one).
		 * The click event object contains among other things different
		 * coordinates that we need when calculating where in the map the click
		 * actually happened. */
		let offset = {
		    x: event.currentTarget.getBoundingClientRect().left,
		    y: event.currentTarget.getBoundingClientRect().top,
		};
		socket.emit('addOrder', {
		    orderId: this.getNext(),
		    details: {
			x: event.clientX - 10 - offset.x,
			y: event.clientY - 10 - offset.y,
		    },
		    orderItems: ['Beans', 'Curry'],
		});
	    },
	},
    });
    

    

}
