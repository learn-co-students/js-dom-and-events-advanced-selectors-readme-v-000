// declare your functions here...

// does not accept any parameters.
//The function should use an element selector to select the p tags in index.html and return those elements.
//(Note that we're using the plural because the selector will always return an array when used with tags, even if there's only one!)
function paragraphSelector() {
    return $('p')
}

//does not accept any parameters
// The function should use the last jQuery selector to return the last image in index.html.


function lastImageSelector() {
    return $('div img:last')
}

// does not accept any parameters.
// The function should use an ID selector to return the ninja baby image.
function ninjaBabySelector() {
    return $('div img#baby-ninja')
}

// does not accept any parameters
// The function should use a class selector to return the two divs with the class pics
function divSelector() {
    return $('div.pics')
}

// does not accept any parameters
//The function should use a first-child selector to return the first list item in the ul with the ID pic-list

function firstListItem() {
    return $('ul li:first')
}
