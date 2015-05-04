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