beers = [];

function addBeer(name, category, rating) {
    beers.push(
        {
            name: name,
            category: category,
            rating: rating
        }
    );
}

$('.post-beer').on('click', function () {
    var beerName = $('.beer-input').val();

    var beerCategory = $('.category-input').val();
    var beerRating = $('.rating-input').val();
    addBeer(beerName, beerCategory, beerRating);
    renderBeers();
});

function renderBeers() {
    $('.beers-list').empty();
    var i;
    for (i = 0; i < beers.length; i++) {
        console.log(beers[i]);
        $('.beers-list').append('<div>' + beers[i].name + " , " +
            beers[i].category + " , " + beers[i].rating + '</div>');
    }
}