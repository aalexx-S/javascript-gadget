function toggleSpoiler(id) {
	var target = document.getElementById(id+"-content");
	if (target == null) {
		throw new ReferenceError("Error, cannot find spoiler content associate with id "+id);
		return;
	}
	if (target.style.display == 'none' || target.style.display == '') {
		target.style.display = 'block';
	} else {
		target.style.display = 'none';
	}
}
