# javascript-gadget

## spoiler.js

A quick simple clean spoiler toggler implementation.

#### Usage: toggleSpoiler(id)

* "Id" is the id of caller, for example, a button.
* An element with id id+"-content" must exist, otherwise it will throw a reference errror.
* The display attribute of the element with id id+"-content" will be toggled inbetween "none" and "block".
* Id should be unique. It doesn't check if there are multiple elements with the same id.


## escapeObject.js

An escape object implementation. An escape object will 'escape' the mouse cursor. When hovered, it will move to a random position around it very quickly.

#### Usage

Include the script in your html, and set the objects with proper classes described below.

#### class:escapeObject

* An element with class "escapeObject" will become an escape object.
* The escape area is defined by variable "escapePeremeter". It is 50% of min(window width, window height) by default.
* All escaoe object's position attribute will be set to "relative" so that they can actually 'escape'.
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
