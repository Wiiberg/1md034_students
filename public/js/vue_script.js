window.onload = function(){

  const vm12 = new Vue ({
  	el:'#burgers',
  	data: {
  	    menu: food,
  	},
  });
/*
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
*/
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
      burgers: food ,
	    adress: '',
	    Gender: '',
	    counter: 0,
	    customerInfo: [],
      checkedBurgers:'',


	} ,
	methods: {
            markDone: function() {

		vm4.name = document.getElementById("name").value;
		vm4.email = document.getElementById("email").value;
		vm4.Gender = vm123.Gender;
		vm4.recipient = document.getElementById("recipient").value;
    vm4.checkedBurgers = ''
    for(burger in food) {
		    if(document.getElementById(food[burger].id).checked) {
			vm4.checkedBurgers += food[burger].id + ' ';
		    }
}

/*
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
*/
	    },
	      getNext: function() {
		/* This function returns the next available key (order number) in
		 * the orders object, it works under the assumptions that all keys
		 * are integers. */
		this.counter = this.counter + 1
		return this.counter;
	    },
	    addOrder: function() {
		/* When you click in the map, a click event object is sent as parameter
		 * to the function designated in v-on:click (i.e. this one).
		 * The click event object contains among other things different
		 * coordinates that we need when calculating where in the map the click
		 * actually happened. */

		socket.emit('addOrder', {
		    orderId: this.getNext(),
		    details: {
			x: vm7.details.x,
			y: vm7.details.y,
		    },
		    orderItems: [vm4.checkedBurgers],
		    customerInfo: [vm4.name , vm4.email, vm4.Gender ],

		});
	    },

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
	    details: {x:0 , y:0},
	},

	methods: {




	    displayOrder: function(event){
		let offset = {
		    x: event.currentTarget.getBoundingClientRect().left,
		    y: event.currentTarget.getBoundingClientRect().top,
		};
		vm7.details = {x: event.clientX - 10 - offset.x , y:event.clientY - 10 - offset.y }

	    }
	}
    });


}
