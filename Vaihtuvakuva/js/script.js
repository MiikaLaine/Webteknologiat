

var currentIndex = 0;
var intervalId;







let mediaContent = [{ "name": "Mentula", "url": "https://miikalaine.github.io/Webteknologiat/img/Mentula1.jpg" }, { "name": "Mentula", "url": "https://miikalaine.github.io/Webteknologiat/img/Mentula2.jpg" },
{ "name": "Mentula", "url": "https://miikalaine.github.io/Webteknologiat/img/Mentula3.jpg" }, { "name": "Mentula", "url": "https://miikalaine.github.io/Webteknologiat/img/Mentula4.jpg" }];



// Funktio näyttää mediasisällön
function showMedia(index) {
    console.log("index " + index);

    var mediaUrl = mediaContent[index].url;
    $('#media-element').attr('src', mediaUrl);
    localStorage.setItem('lastMediaIndex', index);
}





$(document).ready(function () {



    // Lataa viimeksi näytetty mediasisältö
    var lastMediaIndex = localStorage.getItem('lastMediaIndex');
    if (lastMediaIndex !== null) {
        currentIndex = parseInt(lastMediaIndex);
    }
    showMedia(currentIndex);
});

// Previous-painike
$('#previous-btn').click(function () {
    currentIndex = (currentIndex - 1 + mediaContent.length) % mediaContent.length;
    showMedia(currentIndex);
});

// Next-painike
$('#next-btn').click(function () {
    currentIndex = (currentIndex + 1) % mediaContent.length;
    showMedia(currentIndex);
});

// Play-painike
$('#play-btn').click(function () {
    if (intervalId != null) {
        clearInterval(intervalId);
        intervalId = null;
        $(this).text('Play');
    } else {
        intervalId = setInterval(function () {
            currentIndex = (currentIndex + 1) % mediaContent.length;
            showMedia(currentIndex);
        }, 2000); // Vaihda kuva joka 2 sekunti
        $(this).text('Pause');
    }
});
