var cars = {
    rentals: [
        {
            name: "Economy",
            price:"99",
            available: 3,
            rented: 0,
        },
        {
            name: "Midsize",
            price:"149",
            available: 2,
            rented: 0,
       }
   ]
   }
  	var rentalName = {
	 nameOfRenter: "",
	 carType: ["", ""],
	}

// function getDetails() {
//     var carsRent = document.getElementById("carsRent");
//     var divprice = document.getElementById("divprice");
//     var result = avail();	
	
//  divprice.innerHTML = carsRent.value;	
// }

// function displayDetails(car)
// {

// function carOptions() {
//     var x = document.getElementById("carType");
//     var option = document.createElement("option");
//     option.text = "Economy";
document.getElementById("carOptions").onclick = function() {
    var n = document.getElementById("carOptions").selectedIndex;
    document.getElementById("carPrice").innerHTML = cars.rentals[n].price;
    document.getElementById("carsAvail").innerHTML = cars.rentals[n].available;
}

for (var i = 0; i < cars.rentals.length; i++) {
var selectCar = document.createElement("OPTION");
   selectCar.setAttribute("type", "select");
   selectCar.setAttribute("name", "vehType");
   selectCar.setAttribute("value", i);
   selectCar.setAttribute("id", "car" + i);
   selectCar.setAttribute("onclick", "displayDetails(" + i + ")");
   selectCar.innerHTML = cars.rentals[i].name;
   document.getElementById("carOptions").appendChild(selectCar);
  }


	  //ecarFunction: function() {
	  // return this.economyCars - this.economyCarsBooked;
	  //},
	  
	  //midcarFunction: function() {
	  // return this.midsizeCars - this.midsizeCarsBooked;
	  //},
	  
	  //bookEcon: function() {
	  //    return this.economyCarsBooked++;
	  //},
	  
	  //bookMid: function() {
	  //    return this.midsizeCarsBooked++;
	  //}
	  //};
	    
	// function availFunction() {
	// document.getElementById("ecars").innerHTML = cars.name[0];
	// document.getElementById("midcars").innerHTML = cars.name[1];
	// document.getElementById("ecarsAvail").innerHTML = cars.ecarFunction();
	// document.getElementById("midcarsAvail").innerHTML = cars.midcarFunction();
	// }
	
	// function rentCar() {
	// cars.bookEcon();
	// document.getElementById("ecarsAvail").innerHTML = cars.ecarFunction();
	// }

 //   function rentMidcar(){
 //   cars.bookMid();
	// document.getElementById("midcarsAvail").innerHTML = cars.midcarFunction();    
 //   }
    


	
