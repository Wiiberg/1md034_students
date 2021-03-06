# Checklist

Before you submit the different parts of your lab, make sure that your project fulfils the tasks mentioned below.

## 00 Introduction

- [X] Install an IDE on your system

## 01 Git

- [X] Fork and clone the 1md034_students repository


## 02 HTML

- [X] Ensure the website loads when opening http://localhost:3000/

Create an index.html file which contains:
- [X] A title
- [X] A main headline and two section headlines
- [X] Semantic tags that correspond to the parts of your page
- [X] A section to select burgers that contains at least three items. Each item has at least:
	- [X] A name
	- [X] An image
	- [X] Information about allergies 
- [X] A section to collect customer information:
	- [X] First- and Last Name (in one field)
	- [X] E-Mail Address
	- [X] Street
	- [X] House Number (only allowing numbers in this field)
	- [X] Gender (male, female, do not wish to provide as radio buttons)
- [X] A button to place the order

## 03 CSS

- [X] Create style.css and link to it from index.html

Add the following style/behaviour to your website (mostly in style.css but also requiring changes in index.html):
- [X] Define a base line font for your site by putting the style rule on "body"
- [X] Define a larger base line font size
- [X] A CSS rule to make the allergy information bold
- [X] Define text and background color for one of your two sections (burger selection and customer information)
- [X] Create an empty style definition for the section with unchanged text and background
- [X] Change the cursor and background when hovering over the order button
- [X] Define a table width and center it
- [X] Add margins to the sections and the order button
- [X] Add a border to the two sections
- [X] Add an image after your headline and make it slightly transparent
- [X] Place the image behind your headline to finalize your header
- [X] Use a grid layout instead of tables for the burger selection section


## 04 JavaScript and Vue

- [X] Create js_script.js and vue_script.js
- [X] Link to js_script.js, vue_script.js as well as vue.js in index.html
- [X] Add a menuItem constructor with relevant properties to js_script.js
- [X] Also use your menuItem constructor to instantiate a total of five burgers in js_script.js
- [X] Add the Vue instance example code to vue_script.js 
- [X] Update js_script.js with your JSFiddle code and update vue_script.js with your Vue version
- [X] Update js_script.js and vue_script.js again with your array + loop solutions
- [X] Rewrite js_script.js and index.html to insert your five burgers dynamically to the burger selection section using JavaScript
- [X] Rewrite vue_script.js and index.html to insert your five burgers dynamically to the burger selection section using Vue
- [X] Create a menu.js file with an array containing your five burgers in JSON format
- [X] Remove the menuItem constructor and the instantiation of your five burgers from js_script.js
- [X] Update vue_script.js to get the burgers from menu.js instead
- [ ] Create an event listener in js_script.js connected to your order button
- [X] Add a function to js_script.js connected to the order button in index.html that collects the user's input from the text boxes, the gender and all items on the order (that have the checkbox checked) into an array and also prints out the contents to your console 
- [X] Comment out your previous event listener and use Vue's corresponding functionality in vue_script.js and index.html to react on button presses
- [X] Use Vue's model binding to collect the user's input
- [X] Use Vue to print out a summary of the user's input to the bottom of your page when the order button is pressed
- [X] Add a checkbox to every burger on your menu when it is generated
- [X] Include what burgers the user has checked in the order summary


## 05 Messaging

- [X] Exchange the fields for the customer's address with the interactive map
- [X] Copy the parts of deli-very.js that you need to make the map work into vue_script.js
- [X] Check that your map works and adjust the coordinates if the dots don't show up in the right place.
- [X] Separate addOrder into one function that controls what should happen when a user clicks in the map (displayOrder) and rewrite addOrder to control what should happen when the user clicks the order button
- [X] Remove the socket.on bindings to "currentQueue" and "initialize", and temporarily fix getNext to assign locally generated orderId's when an order is sent
- [X] Send the actual burgers with the order instead of Beans and Curry
- [X] Send the customer's information from your input fields with the order
- [X] Update the dispatcher view so that you see the following for every order:
    - [X] The order's location on the map
    - [X] The ordered burger(-s)
    - [X] The customer's information
    
## Optional
- [ ] Set the orderID on the server side so that multiple customers can add orders
- [ ] Only allow the order to be sent if all necessary information is provided
- [ ] Display multiple orders on the customer page
- [ ] Allow the dispatcher to handle orders by providing buttons next to every order that can switch the order status to "in preparation" and "done"
- [ ] Display the order status to the customer and update it in the customer view if updated by the dispatcher
- [ ] Find a better visualization for what orders belong to which location on the map
