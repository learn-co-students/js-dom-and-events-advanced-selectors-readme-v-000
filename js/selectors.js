
//return array of all p tags
function paragraphSelector() {
    return $('p');
}

//return the last img tag on the page
function lastImageSelector() {
    return $('img:last');
}

//return the element with the baby-ninja id
function ninjaBabySelector() {
    return $('#baby-ninja');
}

//return the divs with the class of 'pics'
function divSelector() {
    return $('div.pics');
}

//return the 
function firstListItem() {
    return $('ul li:first-child');
}
// $('#baby-ninja'); // select a specific id
// $('ul li'); // descendant selector 
// $('div img:first-child'); // first child selector, select the first img in a div
// $("img[alt='the beatles making faces']"); // alt tag selector
// $('div:last'); // select last div on page