$(function(){
  console.log('ready freddy!')
})

function paragraphSelector(){
  return $('p')
}

function lastImageSelector(){
  let last = $('img').length
  let penultimate = $('img').length-1
  return $('img').slice(penultimate, last)
} 

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector(){
  return $('div').slice(0,2)
}

function firstListItem() {
  return $('#pic-list li').slice(0,1)
}

