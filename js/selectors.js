// // selecting by the class
// $('.pics')
// // selecting by the id
// $('#baby-ninja')
// // selecting all the il in the ul
// $('ul il')
// // selecting the first child img of each div
// $('div img:first-child')
// // selecting an image thank to its alt text
// $("img[alt='the beatles making faces']")
// // selecting the last div
// $('div:last')

// // other selectors: last-child, nth-type-of, next sibling, input selector


function paragraphSelector(){
	return $('p')
}

function lastImageSelector(){
	return $('img:last')
}

function ninjaBabySelector(){
	return $('#baby-ninja')
}

function divSelector(){
	return $('.pics')
}

function firstListItem(){
	return $("ul li:first-child")
}