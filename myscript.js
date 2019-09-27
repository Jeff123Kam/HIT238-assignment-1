function initMap() {
    var location = {lat: -12.463440, lng: 130.845642};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 11,
        center:location
    });

    //maker

    var marker = new google.maps.Marker({
        position:{lat:-12.465289,lng:130.842584},
        map:map
    });

    var infoWindow = new google.maps.InfoWindow({
        content:'<h5>Parilament</h5>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map,marker);
    })

    //maker 1

    var marker1 = new google.maps.Marker({
        position:{lat:-12.464367,lng:130.841431},
        map:map
    });

    var infoWindow1 = new google.maps.InfoWindow({
        content:'<h5>Hilton</h5>'
    });

    marker1.addListener('click', function(){
        infoWindow1.open(map,marker1);
    });

    //maker 2

    var marker2 = new google.maps.Marker({
        position:{lat:-12.414206,lng:130.818645},
        map:map
    });

    var infoWindow2 = new google.maps.InfoWindow({
        content:'<h5>east point reserve</h5>'
    });

    marker2.addListener('click', function(){
        infoWindow2.open(map,marker2);
    });

    //marker 3

    var marker3 = new google.maps.Marker({
        position:{lat:-12.366497,lng:130.864570},
        map:map
    });

    var infoWindow3 = new google.maps.InfoWindow({
        content:'<h5>casuarina coastal reserve</h5>'
    });

    marker3.addListener('click', function(){
        infoWindow3.open(map,marker3);
    });

    //marker4

    var marker4 = new google.maps.Marker({
        position:{lat:-12.445782,lng:130.830551},
        map:map
    });

    var infoWindow4 = new google.maps.InfoWindow({
        content:'<h5>Mindil Beach</h5>'
    });

    marker4.addListener('click', function(){
        infoWindow4.open(map,marker4);
    });

    //marker5

    var marker5 = new google.maps.Marker({
        position:{lat:-12.437190,lng:130.833608},
        map:map
    });

    var infoWindow5 = new google.maps.InfoWindow({
        content:'<h5>NT museum</h5>'
    });

    marker5.addListener('click', function(){
        infoWindow5.open(map,marker5);
    });

    //marker 6

    var marker6 = new google.maps.Marker({
        position:{lat:-12.412027,lng:130.927554},
        map:map
    });

    var infoWindow6 = new google.maps.InfoWindow({
        content:'<h5>Crocodylus Park</h5>'
    });

    marker6.addListener('click', function(){
        infoWindow6.open(map,marker6);
    });

    //marker7

    var marker7 = new google.maps.Marker({
        position:{lat:-12.445367,lng:130.835602},
        map:map
    });

    var infoWindow7 = new google.maps.InfoWindow({
        content:'<h5>Botanic Gardens</h5>'
    });

    marker7.addListener('click', function(){
        infoWindow7.open(map,marker7);
    });

    //marker 8

    var marker8 = new google.maps.Marker({
        position:{lat:-12.425174,lng:130.897753},
        map:map
    });

    var infoWindow8 = new google.maps.InfoWindow({
        content:'<h5>Aviation museum/h5>'
    });

    marker8.addListener('click', function(){
        infoWindow8.open(map,marker8);
    });


    //marker 9

    var marker9 = new google.maps.Marker({
        position:{lat:-12.466654,lng:130.847504},
        map:map
    });

    var infoWindow9 = new google.maps.InfoWindow({
        content:'<h5>Wave Pool</h5>'
    });

    marker9.addListener('click', function(){
        infoWindow9.open(map,marker9);
    });

    //marker 10

    var marker10 = new google.maps.Marker({
        position:{lat:-12.447805,lng:130.830469},
        map:map
    });

    var infoWindow10 = new google.maps.InfoWindow({
        content:'<h5>Mindil Beach casino</h5>'
    });

    marker10.addListener('click', function(){
        infoWindow10.open(map,marker10);
    });

    //marker 11

    var marker11 = new google.maps.Marker({
        position:{lat:-12.461584,lng:130.843945},
        map:map
    });

    var infoWindow11 = new google.maps.InfoWindow({
        content:'<h5>Oaks Élan Darwin</h5>'
    });

    marker11.addListener('click', function(){
        infoWindow11.open(map,marker11);
    });

    //marker 12

    var marker12 = new google.maps.Marker({
        position:{lat:-12.466566,lng:130.846561},
        map:map
    });

    var infoWindow12 = new google.maps.InfoWindow({
        content:'<h5>Vibe Hotel Darwin</h5>'
    });

    marker12.addListener('click', function(){
        infoWindow12.open(map,marker12);
    });
}

let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;


function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}


function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}


function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}


function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}


arrowLeft.addEventListener("click", function() {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});


arrowRight.addEventListener("click", function() {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();


