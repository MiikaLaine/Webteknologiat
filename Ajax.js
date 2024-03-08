let counter = 0;







function updateCounter(value) {
    counter++;
    let data =
        '<div class="accordion-item">' +
        ' <h2 class="accordion-header" id="headingOne">' +
        ' <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">' +
        'Fakta numero ' + counter +
        ' </button>' +
        '</h2>' +
        '<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">' +
        '<div class="accordion-body">' + value +
        ' </div>' +
        '</div>' +
        '</div>';


    $('#counter').text(counter);
    $("#accordionFlushExample").append(data);

}

document.getElementById('fetchDataBtn').addEventListener('click', function () {
    // Näytä latausanimatio
    $('#loadingAnimation').addClass('active');

    // Tee HTTP-pyyntö
    fetch('http://numbersapi.com/random/trivia')
        .then(response => response.text())
        .then(data => {
            // Piilota latausanimatio
            $('#loadingAnimation').removeClass('active');

            // Päivitä laskuri
            updateCounter(data);



            // Näytä data
            $('#dataContainer').html(data);
        })
        .catch(error => console.error('Virhe:', error));
});













