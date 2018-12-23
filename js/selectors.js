// declare your functions here...

// $('img');                                   // ELEMENT SELECTOR
// $('.pics');                                 // CLASS SELECTOR
// $('#baby-ninja');                           // ID SELECTOR
// $('ul li');                                 // DESCENDANT SELECTOR
// $('parent-tag child-tag:first-child');      // FIRST CHILD SELECTOR SYNTAX
// $('div img:first-child');                   // FIRST CHILD SELECTOR
// $("img[alt='the beatles making faces']");   // ALT TAG SELECTOR
// $('div:last');                              // LAST SELECTOR

function paragraphSelector() {
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('#baby-ninja');
}

function divSelector() {
  return $('.pics');
}

function firstListItem(){
  return $('ul li:first-child');
}
