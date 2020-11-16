function show_hide() {
    /*var checkbox = document.getElementById("yes")
    var carlist = document.getElementsByName("cars")
    var typeOfCars = document.getElementsByClassName("typeOfCar")
    var mpgLabel = document.getElementsByClassName("mpgLabel")
    var mpg = document.getElementsByClassName("mpg")
    var car = document.getElementsByName("car")

    var car = document.getelement
    for (var i = 0; i < typeOfCars.length; i++){
        if(car.selected){
           typeOfCars[i].style.display ="block";
            carlist[i].style.display ="block";
            mpgLabel[i].style.display ="block";
            mpg[i].style.display ="block";
            
        } else {
            typeOfCars[i].style.display ="none";
            carlist[i].style.display ="none";
            mpgLabel[i].style.display ="none";
            mpg[i].style.display ="none";
        }
    }*/

    var transType = document.getElementById("transportationTypes");

    if (transType.value == "car") {
        document.getElementById("cars").style.display="block";
        document.getElementById("mpg").style.display="block";
        document.getElementById("typeOfCar").style.display="block";
        document.getElementById("mpgLabel").style.display="block";
    }else {
        document.getElementById("cars").style.display="none";
        document.getElementById("typeOfCar").style.display="none";
        document.getElementById("mpgLabel").style.display="none";
        document.getElementById("mpg").style.display="none";
    }

}
