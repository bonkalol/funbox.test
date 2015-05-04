/* ========================

mouseEvent'ы элемента .catfood

========================= */

(function () {

	var catfood = document.querySelectorAll('.js-catfood-hover'),
		hoverClass = 'js-catfood-hovered',
		selectedClass = 'js-catfood-selected';

	bindListeners(catfood, 'mouseover', function (event, element) {

		element.classList.remove(hoverClass);

	});

	bindListeners(catfood, 'mouseleave', function (event, element) {

		element.classList.add(hoverClass);

	});

	bindListeners(catfood, 'mousedown', function (event, element) {

			if ( element.classList.contains(selectedClass) )
				element.classList.remove(selectedClass);
			else
				element.classList.add(selectedClass);

	});


})();