# javascript-gadget

## Spoiler.js

A quick simple clean spoiler toggle implementation. A lot of implementations out there are pretty ugly, so I decide to write one.

### Usage: toggleSpoiler(id)

* "Id" is the id of caller, for example, a button.
* An element with id id+"-content" must exist, otherwise it will throw a reference errror.
* The display attribute of the element with id id+"-content" will be toggled inbetween "none" and "block".
* Id should be unique, so it doesn't check if there are multiple element.

