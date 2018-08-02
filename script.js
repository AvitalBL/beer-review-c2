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
    // $("p").html("Hello <b>world</b>!");

    $('.beers-list').empty();
    var i;
    for (i = 0; i < beers.length; i++) {

        console.log(beers[i]);
        $('.beers-list').append('<div>' + beers[i].name + " , " + 
        beers[i].category + " , " + beers[i].rating + '</div>');


    }
}







//     const newBeer = $("<li>" + $('.beer-input').val() + "</li>");
//     $(".beer-list").append(newBeer);
//   });



//   $('.beer-list').append('<li>' + 
//   $('.beer-input').val() + $('.category-input').val() + '</li>'
// )

  ///
//   var clicked = function () {
//     alert('clicked!');
//   }

//   $('button').click(clicked);

