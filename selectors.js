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
	// document.paragraphSelector();

function lastImageSelector() {
	$('div:last'); // use the last jQuery selector to return the last image in index.html
}

function ninjaBabySelector() {
	$('#baby-ninja'); // use an ID selector to return the ninja baby image
}

function divSelector() {
	$('.pics'); // use class selector to return the two divs with the class pics
}

function firstListItem() {
	$('div-pic-list:first-child');  // use a first-child selector to retun the first list item in the ul with the ID pic-list
}
// declare your functions here...

// <script type="text/javascript">

//   function globalEval(data) {
//     data = data.replace(/^\s+|\s+$/g, "");

//     if (data) {
//       var head = document.getElementsByTagName("head")[0] ||
//               document.documentElement,
//           script = document.createElement("script");

//       script.type = "text/javascript";
//       script.text = data;

//       head.insertBefore(script, head.firstChild);
//       head.removeChild(script);
//     }
//   }

// </script>