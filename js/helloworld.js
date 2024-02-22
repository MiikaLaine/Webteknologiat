



window.onload = function () {
    address = "Yliopistonkatu 36";
    document.getElementById("addressField").value = address;

    console.log("Morjes");
}

function search() {


    let address = document.getElementById("addressField").value.replace(" ", "");
    console.log("osoite kentässä: " + address);

    let city = document.getElementById("cityField").value;
    console.log("osoite kentässä: " + city);
    let mapurl = 'https://www.google.com/maps?q=' + address + city + '&output=embed'
    let iframe = document.getElementById('map-frame');
    iframe.src = mapurl;

}