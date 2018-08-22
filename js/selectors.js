// declare your functions here...
function paragraphSelector() {
  // I need to return an array but my code returns undefined
  return $('p');
}

function lastImageSelector() {
  // return the last image
  return $('img:last');
}

function ninjaBabySelector() {
  // return the image of the ninja baby
  return $("img[id='baby-ninja']");
}

function divSelector() {
  // should return two divs
  return $('div[class]');
}

function firstListItem() {
  // Return the first list item in the unordered list
  // $('ul img:first-child') return an array of length 3
  // return $('ul[id="pic-list"] img:first-child');
  return $('ul li').first();
}
