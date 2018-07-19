// declare your functions here...

function paragraphSelector() {
  return $("p");
}

function ninjaBabySelector() {
  return $("#baby-ninja");
}

function lastImageSelector() {
  allImages = $("img");
  return allImages.slice(5);
}

function divSelector() {
  return $("div.pics");
}

function firstListItem() {
  let uls = $("ul li");
  return uls.slice(0, 1);
}
