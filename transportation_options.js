function show_hide() {
    var transType = document.getElementById("transportationTypes");

    if (transType.value == "car") {
        document.getElementById("cars").style.display="block";
        document.getElementById("mpg").style.display="block";
        document.getElementById("typeOfCar").style.display="block";
        document.getElementById("mpgLabel").style.display="block";
        document.getElementById("yearLabel").style.display="block";
        document.getElementById("year").style.display="block";
    }else {
        document.getElementById("cars").style.display="none";
        document.getElementById("typeOfCar").style.display="none";
        document.getElementById("mpgLabel").style.display="none";
        document.getElementById("mpg").style.display="none";
        document.getElementById("yearLabel").style.display="none";
        document.getElementById("year").style.display="none";
    }

    if (transType.value == "carpool") {
        document.getElementById("cpNumPeople").style.display="block";
        document.getElementById("cpNumPeople1").style.display="inline";
        document.getElementById("cpCars").style.display="block";
        document.getElementById("cpMpg").style.display="block";
        document.getElementById("cpTypeOfCar").style.display="block";
        document.getElementById("cpMpgLabel").style.display="block";
        document.getElementById("cpYearLabel").style.display="block";
        document.getElementById("cpYear").style.display="block";
    }else {
        document.getElementById("cpNumPeople").style.display="none";
        document.getElementById("cpNumPeople1").style.display="none";
        document.getElementById("cpCars").style.display="none";
        document.getElementById("cpTypeOfCar").style.display="none";
        document.getElementById("cpMpgLabel").style.display="none";
        document.getElementById("cpMpg").style.display="none";
        document.getElementById("cpYearLabel").style.display="none";
        document.getElementById("cpYear").style.display="none";
    }

    if (transType.value == "motorcycle") {
        document.getElementById("motorcycles").style.display="block";
        document.getElementById("typeOfMotorcycles").style.display="block";
        document.getElementById("mmpg").style.display="block";
        document.getElementById("mmpgLabel").style.display="block";
        document.getElementById("myearLabel").style.display="block";
        document.getElementById("myear").style.display="block";
    } else {
        document.getElementById("motorcycles").style.display="none";
        document.getElementById("typeOfMotorcycles").style.display="none";
        document.getElementById("mmpgLabel").style.display="none";
        document.getElementById("mmpg").style.display="none";
        document.getElementById("myearLabel").style.display="none";
        document.getElementById("myear").style.display="none";
    }

    if (transType.value == "bike") {
        document.getElementById("bhaveBike").style.display="block";
        document.getElementById("bsafeRoute").style.display="block";
        document.getElementById("bnotSafeRoute").style.display="block";
    } else {
        document.getElementById("bhaveBike").style.display="none";
        document.getElementById("bsafeRoute").style.display="none";
        document.getElementById("bnotSafeRoute").style.display="none";
    }

    if (transType.value == "bus") {
        document.getElementById("bPlannedRoute").style.display="block";
        document.getElementById("bHavePlannedRoute").style.display="block";
        document.getElementById("bNoPlannedRoute").style.display="block";
        document.getElementById("bCommuterSleeve").style.display="block";
        document.getElementById("bHaveCommuterSleeve").style.display="block";
        document.getElementById("bNoCommuterSleeve").style.display="block";
    } else {
        document.getElementById("bPlannedRoute").style.display="none";
        document.getElementById("bHavePlannedRoute").style.display="none";
        document.getElementById("bNoPlannedRoute").style.display="none";
        document.getElementById("bCommuterSleeve").style.display="none";
        document.getElementById("bHaveCommuterSleeve").style.display="none";
        document.getElementById("bNoCommuterSleeve").style.display="none";
    }

    if (transType.value == "light rail") {
        document.getElementById("lPlannedRoute").style.display="block";
        document.getElementById("lHavePlannedRoute").style.display="block";
        document.getElementById("lNoPlannedRoute").style.display="block";
        document.getElementById("lCommuterSleeve").style.display="block";
        document.getElementById("lHaveCommuterSleeve").style.display="block";
        document.getElementById("lNoCommuterSleeve").style.display="block";
    } else {
        document.getElementById("lPlannedRoute").style.display="none";
        document.getElementById("lHavePlannedRoute").style.display="none";
        document.getElementById("lNoPlannedRoute").style.display="none";
        document.getElementById("lCommuterSleeve").style.display="none";
        document.getElementById("lHaveCommuterSleeve").style.display="none";
        document.getElementById("lNoCommuterSleeve").style.display="none";
    }

    if (transType.value == "rideshare") {
        document.getElementById("rNumPeople").style.display="block";
        document.getElementById("rNumPeople2").style.display="inline";
        document.getElementById("takeAgain").style.display="block";
        document.getElementById("yesTakeAgain").style.display="block";
        document.getElementById("yesTakeAgain1").style.display="inline";
        document.getElementById("noTakeAgain").style.display="block";
        document.getElementById("noTakeAgain1").style.display="inline";
    } else {
        document.getElementById("rNumPeople").style.display="none";
        document.getElementById("rNumPeople2").style.display="none";
        document.getElementById("takeAgain").style.display="none";
        document.getElementById("yesTakeAgain").style.display="none";
        document.getElementById("yesTakeAgain1").style.display="none";
        document.getElementById("noTakeAgain").style.display="none";
        document.getElementById("noTakeAgain1").style.display="none";
    } 

    if (transType.value == "walking") {
        document.getElementById("walk").style.display="block";
        document.getElementById("wsafeRoute").style.display="block";
        document.getElementById("wnotSafeRoute").style.display="block";
    } else {
        document.getElementById("walk").style.display="none";
        document.getElementById("wsafeRoute").style.display="none";
        document.getElementById("wnotSafeRoute").style.display="none";
    }
}
