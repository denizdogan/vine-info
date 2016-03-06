'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = info;

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _isUrl = require('is-url');

var _isUrl2 = _interopRequireDefault(_isUrl);

var _when = require('when');

var _when2 = _interopRequireDefault(_when);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SCRIPT_REGEXP = /<script type="application\/ld\+json">([\S\s]*?)<\/script>/;
var ID_REGEXP = /^\w{11}$/;

/**
 * Given an HTML string, extract and return metadata.
 * @param {string} html - HTML string
 * @returns {object} Extracted metadata
 */
function parseHtml(html) {
	var m = html.match(SCRIPT_REGEXP);
	if (!m) {
		throw 'Failed to parse HTML';
	}

	try {
		return JSON.parse(m[1]);
	} catch (SyntaxError) {
		throw 'Failed to parse JSON';
	}
}

/**
 * Given a Vine video ID, return metadata about the video.
 * @param {string} url - Vine video ID
 * @returns {object} Metadata about the video
 */
function info(id) {

	// make sure the ID is a valid vine ID
	if (!id.match(ID_REGEXP)) return _when2.default.reject('Invalid Vine ID');

	var target = 'https://vine.co/v/' + id;
	return _requestPromise2.default.get(target).then(function (resp) {
		try {
			return parseHtml(resp);
		} catch (err) {
			return _when2.default.reject(err);
		}
	});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztrQkE4QndCOzs7Ozs7Ozs7Ozs7Ozs7O0FBMUJ4QixJQUFNLGdCQUFnQiwyREFBaEI7QUFDTixJQUFNLFlBQVksVUFBWjs7Ozs7OztBQU9OLFNBQVMsU0FBVCxDQUFtQixJQUFuQixFQUF5QjtBQUN4QixLQUFJLElBQUksS0FBSyxLQUFMLENBQVcsYUFBWCxDQUFKLENBRG9CO0FBRXhCLEtBQUksQ0FBQyxDQUFELEVBQUk7QUFDUCxRQUFNLHNCQUFOLENBRE87RUFBUjs7QUFJQSxLQUFJO0FBQ0gsU0FBTyxLQUFLLEtBQUwsQ0FBVyxFQUFFLENBQUYsQ0FBWCxDQUFQLENBREc7RUFBSixDQUVFLE9BQU8sV0FBUCxFQUFvQjtBQUNyQixRQUFNLHNCQUFOLENBRHFCO0VBQXBCO0NBUkg7Ozs7Ozs7QUFrQmUsU0FBUyxJQUFULENBQWMsRUFBZCxFQUFrQjs7O0FBR2hDLEtBQUksQ0FBQyxHQUFHLEtBQUgsQ0FBUyxTQUFULENBQUQsRUFDSCxPQUFPLGVBQUssTUFBTCxDQUFZLGlCQUFaLENBQVAsQ0FERDs7QUFHQSxLQUFJLGdDQUE4QixFQUE5QixDQU40QjtBQU9oQyxRQUFPLHlCQUFRLEdBQVIsQ0FBWSxNQUFaLEVBQW9CLElBQXBCLENBQXlCLGdCQUFRO0FBQ3ZDLE1BQUk7QUFDSCxVQUFPLFVBQVUsSUFBVixDQUFQLENBREc7R0FBSixDQUVFLE9BQU8sR0FBUCxFQUFZO0FBQ2IsVUFBTyxlQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVAsQ0FEYTtHQUFaO0VBSDZCLENBQWhDLENBUGdDO0NBQWxCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdC1wcm9taXNlJztcclxuaW1wb3J0IGlzVXJsIGZyb20gJ2lzLXVybCc7XHJcbmltcG9ydCB3aGVuIGZyb20gJ3doZW4nO1xyXG5cclxuY29uc3QgU0NSSVBUX1JFR0VYUCA9IC88c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvblxcL2xkXFwranNvblwiPihbXFxTXFxzXSo/KTxcXC9zY3JpcHQ+LztcclxuY29uc3QgSURfUkVHRVhQID0gL15cXHd7MTF9JC87XHJcblxyXG4vKipcclxuICogR2l2ZW4gYW4gSFRNTCBzdHJpbmcsIGV4dHJhY3QgYW5kIHJldHVybiBtZXRhZGF0YS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWwgLSBIVE1MIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBFeHRyYWN0ZWQgbWV0YWRhdGFcclxuICovXHJcbmZ1bmN0aW9uIHBhcnNlSHRtbChodG1sKSB7XHJcblx0bGV0IG0gPSBodG1sLm1hdGNoKFNDUklQVF9SRUdFWFApO1xyXG5cdGlmICghbSkge1xyXG5cdFx0dGhyb3cgJ0ZhaWxlZCB0byBwYXJzZSBIVE1MJztcclxuXHR9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShtWzFdKTtcclxuXHR9IGNhdGNoIChTeW50YXhFcnJvcikge1xyXG5cdFx0dGhyb3cgJ0ZhaWxlZCB0byBwYXJzZSBKU09OJztcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHaXZlbiBhIFZpbmUgdmlkZW8gSUQsIHJldHVybiBtZXRhZGF0YSBhYm91dCB0aGUgdmlkZW8uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBWaW5lIHZpZGVvIElEXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IE1ldGFkYXRhIGFib3V0IHRoZSB2aWRlb1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5mbyhpZCkge1xyXG5cclxuXHQvLyBtYWtlIHN1cmUgdGhlIElEIGlzIGEgdmFsaWQgdmluZSBJRFxyXG5cdGlmICghaWQubWF0Y2goSURfUkVHRVhQKSlcclxuXHRcdHJldHVybiB3aGVuLnJlamVjdCgnSW52YWxpZCBWaW5lIElEJyk7XHJcblxyXG5cdGxldCB0YXJnZXQgPSBgaHR0cHM6Ly92aW5lLmNvL3YvJHtpZH1gO1xyXG5cdHJldHVybiByZXF1ZXN0LmdldCh0YXJnZXQpLnRoZW4ocmVzcCA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VIdG1sKHJlc3ApO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdHJldHVybiB3aGVuLnJlamVjdChlcnIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbiJdfQ==