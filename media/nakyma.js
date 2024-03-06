$(document).ready(function () {
    var mediaContent = [
        { "name": "Mentula", "url": "https://miikalaine.github.io/Webteknologiat/img/Mentula1.jpg" },
        { "name": "Mentula", "url": "https://miikalaine.github.io/Webteknologiat/img/Mentula2.jpg" },
        { "name": "Mentula", "url": "https://miikalaine.github.io/Webteknologiat/img/Mentula3.jpg" },
        { "name": "Mentula", "url": "https://miikalaine.github.io/Webteknologiat/img/Mentula4.jpg" }
    ];

    // Funktio lisää mediasisällön
    function addMedia(mediaContent) {
        var mediaContainer = $('#media-container');
        mediaContainer.empty(); // Tyhjennetään ensin sisältö

        // Käydään läpi mediasisältö ja lisätään jokainen media-elementti
        mediaContent.forEach(function (media) {
            var mediaElement = $('<img>').addClass('media-item').attr('src', media.url);
            mediaContainer.append(mediaElement);
        });
    }

    // Alustetaan mediasisältö listanäkymällä
    addMedia(mediaContent);
});

// Klikkikäsittelijä listanäkymälle
function toggleListView() {
    $('#media-container').removeClass('grid-container').addClass('list-container');
    $('.media-item').css({ 'width': '50%', 'height': 'auto' }); // Asetetaan kuvien koko listanäkymässä
}

// Klikkikäsittelijä grid-näkymälle
function toggleGridView() {
    $('#media-container').removeClass('list-container').addClass('grid-container');
    $('.media-item').css({ 'width': '', 'height': '' }); // Palautetaan kuvien alkuperäinen koko ruudukkonäkymässä
}
