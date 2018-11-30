// declare your functions here...

function paragraphSelector() {
  return $('p')
}

function lastImageSelector() {
    return $('ul li img').last();
    //.attr('src')
}

function ninjaBabySelector() {
  return $('#baby-ninja');
  // $('img').first().attr('src')
}

function divSelector() {
  x = $('div');
  return [x[0], x[1]]
}

function firstListItem() {
  return $('ul li').first();
}
