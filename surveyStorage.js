// **********************************************************************************************
//
// Stores survey values locally in browser
//
// **********************************************************************************************
//
// localStorage: data persits indefinitely
// sessionStorage: data persists until the tab is closed
//
// Syntax: sessionStorage.setItem("Name of variable in storage", JSvariable.value);

function store() {
    // --- Method of Transportation -------------------------------------------------------------
    sessionStorage.setItem("transportationTypes", document.getElementById("transportationTypes").value);

        // --- Type of Transportation (Bike) ----------------------------------------------------
        if(document.querySelector('input[name="bike"]:checked')) {
            sessionStorage.setItem("bsaferoute", document.querySelector('input[name="bike"]:checked').value);
        }

        // --- Type of Transportation (Bus) -----------------------------------------------------
        if(document.querySelector('input[name="bRoute"]:checked')) {
            sessionStorage.setItem("bHavePlannedRoute", document.querySelector('input[name="bRoute"]:checked').value);
        }
        if(document.querySelector('input[name="bCommuterSleeve"]:checked')) {
            sessionStorage.setItem("bHaveCommuterSleeve", document.querySelector('input[name="bCommuterSleeve"]:checked').value);
        }

        // --- Type of Transportation (Car) -----------------------------------------------------
        sessionStorage.setItem("year", document.getElementById("year").value);

        sessionStorage.setItem("cars", document.getElementById("cars").value);

        sessionStorage.setItem("mpg", document.getElementById("mpg").value);

        // --- Type of Transportation (Carpool) -------------------------------------------------
        sessionStorage.setItem("cpNumPeople", document.getElementById("cpNumPeople1").value);

        sessionStorage.setItem("cpYear", document.getElementById("cpYear").value);

        sessionStorage.setItem("cpTypeOfCar", document.getElementById("cpCars").value);

        sessionStorage.setItem("cpMpg", document.getElementById("cpMpg").value);

        // --- Type of Transportation (Light Rail) ----------------------------------------------
        if(document.querySelector('input[name="lRoute"]:checked')) {
            sessionStorage.setItem("lHavePlannedRoute", document.querySelector('input[name="lRoute"]:checked').value);
        }

        if(document.querySelector('input[name="lCommuterSleeve"]:checked')) {
            sessionStorage.setItem("lHaveCommuterSleeve", document.querySelector('input[name="lCommuterSleeve"]:checked').value);
        }

        // --- Type of Transportation (Motorcycle) ----------------------------------------------
        sessionStorage.setItem("myear", document.getElementById("myear").value);

        sessionStorage.setItem("motorcycles", document.getElementById("motorcycles").value);

        sessionStorage.setItem("mmpg", document.getElementById("mmpg").value);

        // --- Type of Transportation (Rideshare) -----------------------------------------------
        sessionStorage.setItem("rNumPeople2", document.getElementById("rNumPeople2").value);

        if(document.querySelector('input[name="takeAgain1"]:checked')) {
            sessionStorage.setItem("yesTakeAgain1", document.querySelector('input[name="takeAgain1"]:checked').value);
        }

        // --- Type of Transportation (Walking) -------------------------------------------------
        if(document.querySelector('input[name="wSafeR"]:checked')) {
            sessionStorage.setItem("wsafeRoute", document.querySelector('input[name="wSafeR"]:checked').value);
        }

    // --- Distance From Campus -----------------------------------------------------------------
    sessionStorage.setItem("mi", document.getElementById("mi").value);

    // --- Number of Commutes to Campus -----------------------------------------------------------------
    sessionStorage.setItem("numOfDays", document.getElementById("numOfDays").value);

    // --- Planned Departure Time ---------------------------------------------------------------
    sessionStorage.setItem("plannedTime", document.getElementById("plannedTime").value);
}


// **********************************************************************************************
//
// Stores survey values locally in browser
//
// **********************************************************************************************
//
//
function calculate_results() {
    // Grab Data from storage
    var rank1 = sessionStorage.getItem("ranks");
    var rank2 = sessionStorage.getItem("ranks2");
    var rank3 = sessionStorage.getItem("ranks3");
    var transportationType = sessionStorage.getItem("transportationTypes");
    var distance = sessionStorage.getItem("mi");
	
	//Car variables
	var mpg = sessionStorage.getItem("mpg");
	var carType = sessionStorage.getItem("cars");
	var year = sessionStorage.getItem("year");
	var ownershipCost;
	
	//Carpool variables
	var cpNumPeople = sessionStorage.getItem("cpNumPeople");
	var cpYear = sessionStorage.getItem("cpYear");
	var cpTypeOfCar = sessionStorage.getItem("cpTypeOfCar");
	var cpMpg = sessionStorage.getItem("cpMpg");
	
	//lightrail variables
	var IHaveCommuterSleeve = sessionStorage.getItem("IHaveCommuterSleeve");
	
	//Motorcycle variables
	var myear = sessionStorage.getItem("myear");
	var mmpg = sessionStorage.getItem("mmpg");
	
	//Ridesharing variables
	var rNumPeople2 = sessionStorage.getItem("rNumPeople2");
		
	//Dummy passing variables
	var money1;
	var sust1;
	var time1;
	
	var money2;
	var sust2;
	var time2;
	
	var money3;
	var sust3;
	var time3;
	

    // Point tracking
    var choice1, choice2, choice3;

    var rankings = [
        [0, 'bike'],
        [0, 'bus'],
        [0, 'car'],
        [0, 'carpool'],
        [0, 'light rail'],
        [0, 'motorcycle'],
        [0, 'rideshare'],
        [0, 'walking']
    ];

    // Point allocation will start at 8 and descend to 1 depending on
    // the best fit for the category (time, sustainability, and money)
    var scoring = [
        [6, 9, 24, 18, 12, 21, 15, 3],  // Rank 1 (time)
        [21, 15, 3, 12, 18, 9, 6, 24],  // Rank 1 (sustainability)
        [21, 15, 3, 18, 12, 6, 9, 24],  // Rank 1 (money)
        [4, 6, 16, 12, 8, 14, 10, 2],   // Rank 2 (time)
        [14, 10, 2, 8, 12, 6, 4, 16],   // Rank 2 (sustainability)
        [14, 10, 2, 12, 8, 4, 6, 16],   // Rank 2 (money)
        [2, 3, 8, 6, 4, 7, 5, 1],       // Rank 3 (time)
        [7, 5, 1, 4, 6, 3, 2, 8],       // Rank 3 (sustainability)
        [7, 5, 1, 6, 4, 2, 3, 8]        // Rank 3 (money)
    ];

    var i;

    // Rank 1 Option point calculation (x3)
    if(rank1 == "time")
        for(i=0; i < 8; i++)
            rankings[i][0] += scoring[0][i];

    else if (rank1 == "sustainability")
        for(i=0; i < 8; i++)
            rankings[i][0] += scoring[1][i];

    else if (rank1 == "money")
        for(i=0; i < 8; i++)
            rankings[i][0] += scoring[2][i];

    // Rank 2 Option point calculation (x2)
    if(rank2 == "time")
        for(i=0; i < 8; i++)
            rankings[i][0] += scoring[3][i];

    else if (rank2 == "sustainability")
        for(i=0; i < 8; i++)
            rankings[i][0] += scoring[4][i];

    else if (rank2 == "money")
        for(i=0; i < 8; i++)
            rankings[i][0] += scoring[5][i];

    // Rank 3 Option point calculation (x1)
    if(rank3 == "time")
        for(i=0; i < 8; i++)
            rankings[i][0] += scoring[6][i];

    else if (rank3 == "sustainability")
        for(i=0; i < 8; i++)
            rankings[i][0] += scoring[7][i];

    else if (rank3 == "money")
        for(i=0; i < 8; i++)
            rankings[i][0] += scoring[5][i];

    // Preferred method of transportation (Bonus points)
    for(i=0; i < 8; i++)
        if(transportationType == rankings[i][1])
            rankings[i][0] += 8;

    // Max distance for walking and biking (point deductions)
    if(distance > 1)
        rankings[7][0] -= 8;
    else if(distance > 5)
        rankings[0][0] -= 4;

    // Sort
    rankings.sort();
    choice1 = rankings[7][1];
    choice2 = rankings[6][1];
    choice3 = rankings[5][1];
	
	//Calculate cost of owning a car 
	ownershipCost = (403.13 + 2135 + 250)/365; //average cost of maintenance, insurance, and registration per year divided by 365 days
	
	
	//Calculate money, sustainability, and time for each choice
	
	//choice1 
	if(choice1 == "bike"){
		money1 = 0;
		sust1 = 0;
		time1 = (distance/12)*60;		//average mph of a bike in the city is 12 mph, and the final result is in minutes
	else if(choice1 = "bus"){
		if(IHaveCommuterSleeve)
			money1 = 0;
		else
			money1 = 2.50;
		sust1 = 1481;
		time1 = (distance/11)*60;		//average mph of 30 line is about 11 mph *60 for minutes
	}
	else if(choice1 = "car"){
		money1 = ownershipCost + (distance/mpg * 3);	//ownership cost plus cost of gas
		sust1 = distance/mpg*10664;			//gallons * grams of CO2 per gallon
		time1 = (distance/50)*60;		//distance over the average expected speed in commuting
	}
	else if(choice1 = "carpool"){
		money1 = (ownershipCost + (distance/mpg * 3))/cpNumPeople; //cost of car / number of people riding
		sust1 = (sust1 = distance/mpg * 10664)/cpNumPeople;
		time1 = (distance/50)*60;
	}
	else if(choice1 = "light rail"){
		if(IHaveCommuterSleeve)
			money1 = 0;
		else
			money1 = 2.50;
		sust1 = 1481;
		time1 = (distance/28)*60;	//average speed of lightrail is about 28 mph
	}
	else if(choice1 = "motorcycle"){
		money1 = ownershipCost + (distance/mmpg * 3);
		sust1 = distance/mmpg * 6059; //gallons * grams of CO2 per gallon
		time1 = (distance/50)*60
	}
	else if(choice1 = "rideshare"){
		money1 = 2.55 + 2.82*distance;
		sust1 = (distance/22 *10664)/rNumPeople2;	//distance/average vehicle mpg
		time1 = (distance/50)*60;
	}
	else if(choice1 = "walking"){
		money1 = 0;
		sust1 = 0;
		time1 = distance/3; //average walking speed is 3 mph
	}
	
	//choice2
	
	if(choice2 == "bike"){
		money2 = 0;
		sust2 = 0;
		time2 = (distance/12)*60;		//average mph of a bike in the city is 12 mph, and the final result is in minutes
	else if(choice2 = "bus"){
		if(IHaveCommuterSleeve)
			money2 = 0;
		else
			money2 = 2.50;
		sust2 = 1481;
		time2 = (distance/11)*60;		//average mph of 30 line is about 11 mph *60 for minutes
	}
	else if(choice2= "car"){
		money2= ownershipCost + (distance/mpg * 3);	//ownership cost plus cost of gas
		sust2 = distance/mpg*10664;			//gallons * grams of CO2 per gallon
		time2 = (distance/50)*60;		//distance over the average expected speed in commuting
	}
	else if(choice2= "carpool"){
		money2 = (ownershipCost + (distance/mpg * 3))/cpNumPeople; //cost of car / number of people riding
		sust2= (sust1 = distance/mpg * 10664)/cpNumPeople;
		time2= (distance/50)*60;
	}
	else if(choice2 = "light rail"){
		if(IHaveCommuterSleeve)
			money2 = 0;
		else
			money2= 2.50;
		sust2 = 1481;
		time2 = (distance/28)*60;	//average speed of lightrail is about 28 mph
	}
	else if(choice2 = "motorcycle"){
		money2 = ownershipCost + (distance/mmpg * 3);
		sust2= distance/mmpg * 6059; //gallons * grams of CO2 per gallon
		time2 = (distance/50)*60
	}
	else if(choice2= "rideshare"){
		money2 = 2.55 + 2.82*distance;
		sust2 = (distance/22 *10664)/rNumPeople2;	//distance/average vehicle mpg
		time2 = (distance/50)*60;
	}
	else if(choice2 = "walking"){
		money2 = 0;
		sust2= 0;
		time2 = distance/3; //average walking speed is 3 mph
	}
	
	
	//Choice 3
	if(choice3 == "bike"){
		money3= 0;
		sust3 = 0;
		time3 = (distance/12)*60;		//average mph of a bike in the city is 12 mph, and the final result is in minutes
	else if(choice3 = "bus"){
		if(IHaveCommuterSleeve)
			money3 = 0;
		else
			money3= 2.50;
		sust3 = 1481;
		time3 = (distance/11)*60;		//average mph of 30 line is about 11 mph *60 for minutes
	}
	else if(choice3 = "car"){
		money3 = ownershipCost + (distance/mpg * 3);	//ownership cost plus cost of gas
		sust3 = distance/mpg*10664;			//gallons * grams of CO2 per gallon
		time3 = (distance/50)*60;		//distance over the average expected speed in commuting
	}
	else if(choice3= "carpool"){
		money3 = (ownershipCost + (distance/mpg * 3))/cpNumPeople; //cost of car / number of people riding
		sust3 = (sust1 = distance/mpg * 10664)/cpNumPeople;
		time3 = (distance/50)*60;
	}
	else if(choice3 = "light rail"){
		if(IHaveCommuterSleeve)
			money3= 0;
		else
			money3= 2.50;
		sust3= 1481;
		time3 = (distance/28)*60;	//average speed of lightrail is about 28 mph
	}
	else if(choice3= "motorcycle"){
		money3 = ownershipCost + (distance/mmpg * 3);
		sust3 = distance/mmpg * 6059; //gallons * grams of CO2 per gallon
		time3 = (distance/50)*60
	}
	else if(choice3 = "rideshare"){
		money3 = 2.55 + 2.82*distance;
		sust3 = (distance/22 *10664)/rNumPeople2;	//distance/average vehicle mpg
		time3 = (distance/50)*60;
	}
	else if(choice3 = "walking"){
		money3 = 0;
		sust3 = 0;
		time3 = distance/3; //average walking speed is 3 mph
	}
	
	

	//Assign values to results page
    document.getElementById("travel_one").innerHTML = choice1;
	document.getElementById("money_one").innerHTML = money1;
	document.getElementById("sust_one").innerHTML = sust1;
	document.getElementById("time_one").innerHTML = time1;
	
    document.getElementById("travel_two").innerHTML = choice2;
	document.getElementById("money_two").innerHTML = money2;
	document.getElementById("sust_two").innerHTML = sust2;
	document.getElementById("time_two").innerHTML = time2;
	
    document.getElementById("travel_three").innerHTML = choice3;
	document.getElementById("money_three").innerHTML = money3;
	document.getElementById("sust_three").innerHTML = sust3;
	document.getElementById("time_three").innerHTML = time3;
	
	
	
	
	

}
