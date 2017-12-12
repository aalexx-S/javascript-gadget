/* Config
 * Change escapePeremeter to set the area of escaping.
 * Change parseTags to set terminate tag names
 */
var escpaePeremeter = Math.min($(window).width(), $(window).height()) * 0.5;
var parseTags = ['img', 'button', 'a'];


$(document).ready( function () {
// alias for lazy people like me
$(".eo").addClass("escapeObject")
$(".so").addClass("stableObject")
$(".ep").addClass("escapeParse")

/*
 * Recursive parse every element with class "escapeParse".
 * Elements in parseTags will become escapeObject.
 * Stop parsing if an element is already a "escapeObject" or a "stableObject".
 * Texts are split by spaces.
 */
$(".escapeParse").each(function () {
	(function wrap(node) {
		$(node).contents().each(function () {
			// Terminate
			if ($(this).hasClass("escapeObject") || $(this).hasClass("stableObject")) {
				return;
			}
			// Make the objects in parseTags escapeObject.
			for (i=0 ; i < parseTags.length ; ++i) {
				if ($(this).is(parseTags[i])) {
					$(this).addClass("escapeObject");
					break;
				}
			}
			// parse texts, split by space
			if (this.nodeType === Node.TEXT_NODE && !this.nodeValue.match(/^\s+$/)) {
				var val = $.trim(this.nodeValue);
				if (val.length > 0) {
					$(this).replaceWith($.map(val.split(/(\S+)/), function (t) {
						return (t.match(/^\s+$/) ?
							document.createTextNode(t) :
							function (i) {
								var r = document.createElement("span");
								r.setAttribute("class", "escapeObject");
								r.setAttribute("style", "position:relative");
								r.textContent = i;
								return r;
							}(t));
					}));
				}
			}
			// Terminate
			if ($(this).hasClass("escapeObject") || $(this).hasClass("stableObject")) {
				return;
			}
			// recursive parse child element
			wrap(this);
		});
	})(this);
});
/*
 * Set all escapeObject's position to relative so that they can actually 'escape'.
 */ 
$(".escapeObject").css("position", "relative")
$(".escapeObject").css("z-index", "2147483647 !important;")

/*
 * Escape when hovered!!
 */
$(function(){
	$(".escapeObject").on({
		mouseover:function(){
			$(this).animate({
				left:(parseInt($(this).css("left")) + (Math.random()-0.5)*escpaePeremeter) + "px",
				top:(parseInt($(this).css("top")) + (Math.random()-0.5)*escpaePeremeter) + "px",
			}, "fast");
		}
	});
});
});

