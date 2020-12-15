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
        document.getElementsByClassName("bhaveBike")[0].style.display="block";
        document.getElementsByClassName("bsafeRoute")[0].style.display="block";
        document.getElementsByClassName("bnotSafeRoute")[0].style.display="block";
    } else {
        document.getElementsByClassName("bhaveBike")[0].style.display="none";
        document.getElementsByClassName("bsafeRoute")[0].style.display="none";
        document.getElementsByClassName("bnotSafeRoute")[0].style.display="none";
    }

    if (transType.value == "bus") {
        document.getElementsByClassName("bPlannedRoute")[0].style.display="block";
        document.getElementsByClassName("bHavePlannedRoute")[0].style.display="block";
        document.getElementsByClassName("bNoPlannedRoute")[0].style.display="block";
        document.getElementsByClassName("bCommuterSleeve")[0].style.display="block";
        document.getElementsByClassName("bHaveCommuterSleeve")[0].style.display="block";
        document.getElementsByClassName("bNoCommuterSleeve")[0].style.display="block";
    } else {
        document.getElementsByClassName("bPlannedRoute")[0].style.display="none";
        document.getElementsByClassName("bHavePlannedRoute")[0].style.display="none";
        document.getElementsByClassName("bNoPlannedRoute")[0].style.display="none";
        document.getElementsByClassName("bCommuterSleeve")[0].style.display="none";
        document.getElementsByClassName("bHaveCommuterSleeve")[0].style.display="none";
        document.getElementsByClassName("bNoCommuterSleeve")[0].style.display="none";
    }

    if (transType.value == "light rail") {
        document.getElementsByClassName("lPlannedRoute")[0].style.display="block";
        document.getElementsByClassName("lHavePlannedRoute")[0].style.display="block";
        document.getElementsByClassName("lNoPlannedRoute")[0].style.display="block";
        document.getElementsByClassName("lCommuterSleeve")[0].style.display="block";
        document.getElementsByClassName("lHaveCommuterSleeve")[0].style.display="block";
        document.getElementsByClassName("lNoCommuterSleeve")[0].style.display="block";
    } else {
        document.getElementsByClassName("lPlannedRoute")[0].style.display="none";
        document.getElementsByClassName("lHavePlannedRoute")[0].style.display="none";
        document.getElementsByClassName("lNoPlannedRoute")[0].style.display="none";
        document.getElementsByClassName("lCommuterSleeve")[0].style.display="none";
        document.getElementsByClassName("lHaveCommuterSleeve")[0].style.display="none";
        document.getElementsByClassName("lNoCommuterSleeve")[0].style.display="none";
    }

    if (transType.value == "rideshare") {
        document.getElementById("rNumPeople").style.display="block";
        document.getElementById("rNumPeople2").style.display="inline";
        document.getElementsByClassName("takeAgain")[0].style.display="block";
        document.getElementsByClassName("yesTakeAgain")[0].style.display="block";
        document.getElementsByClassName("noTakeAgain")[0].style.display="block";
    } else {
        document.getElementById("rNumPeople").style.display="none";
        document.getElementById("rNumPeople2").style.display="none";
        document.getElementsByClassName("takeAgain")[0].style.display="none";
        document.getElementsByClassName("yesTakeAgain")[0].style.display="none";
        document.getElementsByClassName("noTakeAgain")[0].style.display="none";
    } 

    if (transType.value == "walking") {
        document.getElementsByClassName("walk")[0].style.display="block";
        document.getElementsByClassName("wsafeRoute")[0].style.display="block";
        document.getElementsByClassName("wnotSafeRoute")[0].style.display="block";
    } else {
        document.getElementsByClassName("walk")[0].style.display="none";
        document.getElementsByClassName("wsafeRoute")[0].style.display="none";
        document.getElementsByClassName("wnotSafeRoute")[0].style.display="none";
    }
}
