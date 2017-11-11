   var cars = { 
	 name: ["Economy", "Midsize"],
	 economyCars: 125,
	 economyCarsBooked: 0,
	 midsizeCars: 100,
	 midsizeCarsBooked: 0,
	 
	  ecarFunction: function() {
	   return this.economyCars - this.economyCarsBooked;
	  },
	  
	  midcarFunction: function() {
	   return this.midsizeCars - this.midsizeCarsBooked;
	  },
	  
	  bookEcon: function() {
	      return this.economyCarsBooked++;
	  },
	  
	  bookMid: function() {
	      return this.midsizeCarsBooked++;
	  }
	  };
	    
	function availFunction() {
	document.getElementById("ecars").innerHTML = cars.name[0];
	document.getElementById("midcars").innerHTML = cars.name[1];
	document.getElementById("ecarsAvail").innerHTML = cars.ecarFunction();
	document.getElementById("midcarsAvail").innerHTML = cars.midcarFunction();
	}
	
	function rentCar() {
	cars.bookEcon();
	document.getElementById("ecarsAvail").innerHTML = cars.ecarFunction();
	}

    function rentMidcar(){
    cars.bookMid();
	document.getElementById("midcarsAvail").innerHTML = cars.midcarFunction();    
    }
	