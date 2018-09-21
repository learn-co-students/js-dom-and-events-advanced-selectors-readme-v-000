// declare your functions here...
function paragraphSelector() {
  let paragraphElements = $("p");

  return paragraphElements;
}

function lastImageSelector() {
  let lastImage = $("img:last");

  return lastImage;
}

function ninjaBabySelector() {
  let ninjaBabyImage = $("img#baby-ninja");

  return ninjaBabyImage;
}

function divSelector() {
  let divs = $("div.pics");

  return divs;
}

function firstListItem() {
  let firstListElement = $("ul#pic-list li:first-child");

  return firstListElement;
}
