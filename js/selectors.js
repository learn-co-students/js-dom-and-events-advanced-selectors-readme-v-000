// declare your functions here...

// $('img');

// $('.pics');

// $('#baby-ninja');

// $('ul li');

// $('div img:first-child');

// $("img[alt='the beatles making faces']");

// $("img[alt='the beatles making faces']");

// $('div:last');

function paragraphSelector () {
    const p = $('p' )
    return p
}

function lastImageSelector () {
    const li = $('img:last');
    return li
}

function ninjaBabySelector () {
    const nbs = $('#baby-ninja')
    return nbs
}

function divSelector () {
    const ds = $('.pics')
    return ds
}

function firstListItem () {
    const fli = $('#pic-list li:first-child')
    // "ul" was not necessary because #pic-list took care of it;
    // li:first-child was correct bec. the li returned is the first child
    // of the ul with the id #pic-list
    return fli
}