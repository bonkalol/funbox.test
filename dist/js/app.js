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
;(function () {

	// remove trash from localStorage
	localStorage.removeItem('font_css_cache');
	localStorage.removeItem('font_css_cache_file');
	localStorage.removeItem('inlineSVGdata');
	localStorage.removeItem('inlineSVGrev');

})();

/* ============================================
Если в проекте есть $. то "1" не нужно.
Всякий usefull стаф, вспомогательные функции которые
никак не относятся к приложению, а только упрощают написание кода
1. bindListeners(elements, listener, callback); - Функция которая обходит массив элементов и всем биндит
заданный эвент и по тригеру эвента вызывает нужный callback
============================================ */

// 1.
function bindListeners(elements, listener, callback) {


	[].forEach.call(elements, function (element, index, array) {

		element.addEventListener(listener, function (event) {

			callback(event, element);

		});

	});
}
