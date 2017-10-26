//use an element selector to select p tags and return those elements
function paragraphSelector() {
  return $('p')
}


//returns the last image
function lastImageSelector() {
  return $('img:last')
}



//Uses an ID selector to return ninja baby image
function ninjaBabySelector() {
  return $('img#baby-ninja')
}



//uses a class selector to return 2 divs with the class 'pics'
function divSelector() {
  return $('div.pics')

}



//uses a first-child selector to return 1st item in ul with ID pic-list
function firstListItem() {
  return $('ul#pic-list li:first-child')
}
