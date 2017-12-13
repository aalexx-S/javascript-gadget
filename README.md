# javascript-gadget

JQuery is required.

1. [Spoiler](#spoiler)
2. [Escape Object](#escapeobject)
3. [Easy Navbar](#easynavbar)

## spoiler.js<a name="spoiler"></a>

A quick simple clean spoiler toggler implementation.

#### Usage: toggleSpoiler(id)

* "Id" is the id of caller, for example, a button.
* An element with id id+"-content" must exist, otherwise it will throw a reference errror.
* The display attribute of the element with id id+"-content" will be toggled inbetween "none" and "block".
* Id should be unique. It doesn't check if there are multiple elements with the same id.


## escapeObject.js<a name="escapeobject"></a>

An escape object implementation. An escape object will 'escape' the mouse cursor. When hovered, it will move to a random position around it very quickly.

#### Usage

Link the script in your html, and set the objects with proper classes described below.

#### class:escapeObject

* An element with class "escapeObject" will become an escape object.
* The escape area is defined by variable "escapePeremeter". It is 50% of min(window width, window height) by default.
* All escape object's position attribute will be set to "relative" so that they can actually 'escape'.
* Alias to "eo".

#### class:escapeParse

* An element with class "escapeParse" will lead to all of its children, no matter how deep they are, becoming escape objects.
* Text contents will be split by space. Each token can 'escape' on its own.
* If an element's tagname is one of the names defined in "parseTags", the element itself will become an escape object, all of its children, however, WILL NOT. ParseTags is set to ['img', 'button', 'a'] by default.
* Any element with class "escapeObject" will be skipped, so as its children.
* Any child with class "stableObject" will prevent all of its children and itself from becoming escape objects.
* Alias to "ep".
* An element with both "escapeObject" and "escapeParse" will not be parsed.

#### class:stableObject

* An element with class "stableObject" will prevent all of its children and itself from becoming escape objects during the parsing process described above.
* An element with both "escapeObject" and "stableObject" is an escape object.
* An element with both "escapeParse" and "stableObject" is a stable object.
* Alias to "so".

## easyNavbar.js<a name="easynavbar"></a>

An easy navbar implementation. While bootstrap provides a lot of useful navbar style, it does not auto maintain your navbar. You still need to place your navbar html code in every html files and they are hard to maintain. This script allows you to only write your navbar code once, and it will auto substitude pre-defined element with your navbar in every html files. It can also auto detect the current active page so that you can have different styles for the active tab.

#### Usage

Link the script in your html. There must be an element with id "easyNavbar" and it must have a data attribute "data-html" to specify the navbar source code. You can also use jQuery's $.data("html", [source file]) to avoid using html5.

To auto match current active page, follow the steps in [auto match section](#navbar-automatch).

#### id:easyNavbar

* There must be an element with id "easyNavbar".
* It must have data attribute "html". The data attribute can be set via html5 "data-html" in html code or jQuery's $.data("html", [file]).
* The codes in the file specified will REPLACE the original element (the one with id "easyNavbar").
* If auto match is used, the code will not be replaced until all the matches are done.

#### class:easyNavbarMatchActive <a name="navbar-automatch"></a>

* Change var activeClass to set the class that will be added to actived element. It is set to "active" by default.

###### Auto Match Page Title
* Change var matchActive to false to disable. It is set to true by default.
* Only the elements with class "easyNavbarMatchActive" will be tested.
* The matching is done by comparing each elements' key and the page's title with '=='.
* The elements' key is decided in the order below:
    1. Data attribute "title".
    2. $.text().
	* Data attribute can be set via html5 "data-title" in html code or jQuery's $.data("title", [title]).
* The page's title is decided in the order below:
    1. The page title's Data attribute "title".
	2. The page title.
	* Data attribute can be set via html5 "data-title" in html code or jQuery's $("title").data("title", [title]).
* The matching process will stop when a matched element is found.
* The matched element will be added with calss specified in var activeClass. It is set to "active" by default.
###### Remember Clicked
* Change var rememberClicked to false to disable. It is set to true by default.
* When any element with class "easyNavbarMatchActive" is clicked, it will be added with class specified in var activeClass, and all the other elements with class specified in var activeClass will be removed with their activeClass.

