// $('img');
// $('.pics');
// $('#baby-ninja');  replace dot w/#
// $('ul li');
// $('div-img:first-child');
// $("img[alt='the beatles making faces']");
// $('div:last');
function paragraphSelector() {
	return $('p');
 }
	
function lastImageSelector() {
	return $('div:last'); // use the last jQuery selector to return the last image in index.html
}

function ninjaBabySelector() {
	return $('#baby-ninja'); // use an ID selector to return the ninja baby image
}

function divSelector() {
	return $('.pics'); // use class selector to return the two divs with the class pics
}

function firstListItem() {
	return $('div-pic-list:first-child');  // use a first-child selector to retun the first list item in the ul with the ID pic-list
}
// declare your functions here...

