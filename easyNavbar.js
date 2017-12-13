/*
 * Set matchActive to true if you want to match current active page.
 * The matched element will be added with class stored in var activeClass.
 * The program will try to match 1.data("title") 2.text() with the current page's 1.Title 2.data("title"). 
 * If the elements' text() are different from the pages' Title, assign data-title to them in html.
 * If you don't want to use HTML5, use jQuery's data("title", [target name]).
 * Set the file name with data-html in your html or with jQuery's data("html", [target file]).
 *
 * Set rememberClicked to true if you want to change the clicked item to active.
 * The current clicked item will be added with class stored in var activeClass,
 * and all the other actived item's activeClass will be removed.
 */
var matchActive = true;
var rememberClicked = true;
var activeClass = "active";

$(document).ready( function () {

// return if nothing to insert
if ($("#easyNavbar").length == 0 || !$("#easyNavbar").data("html")) {
	console.warn("EasyNavbar need an element with id \"easyNavbar\" to work with.\n"+
		"The element need to have \"data-html\" attribute to specify navbar source code.\n"+
		"Can also be set with jQuery's $.data(\"html\", [target file]).");
	return;
}
var easyNavbarHTML = $("#easyNavbar").data("html");

var nb = $('<div></div>'); // a dummy DOM element so that it is easier to manipulate with
// use callback to make sure it is fully loaded.
nb.load(easyNavbarHTML, function () {
	// match active page
	if (matchActive) {
		var pageTitle = document.title;
		if ($("title").data("title")) {
			pageTitle = $("title").data("title");
		}
		$(".easyNavbarMatchActive").each( function () {
			var n = $(this).text().trim();
			if ($(this).data("title")) {
				n = $(this).data("title");
			}
			if (n == pageTitle) {
				$(this).addClass(activeClass);
				return false; // Stop each loop. Only match the first element found.
			}
		});
	}
	// remember clicked
	$(function(){
		$(".easyNavbarMatchActive").on(
			"click", function () {
				$(".easyNavbarMatchActive."+activeClass).removeClass(activeClass);
				$(this).addClass(activeClass);
		});
	});
});

$("#easyNavbar").replaceWith(nb);

});
