function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function initMap() {
    var location = {lat: -12.463440, lng: 130.845642};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 4,
        center:location
    });
    var marker = new google.maps.Marker({
        position:location,
        map: map
    })
}


