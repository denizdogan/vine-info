'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = info;

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _isUrl = require('is-url');

var _isUrl2 = _interopRequireDefault(_isUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Fetch metadata about a Vine video.
 */

var URL_ID_REGEXP = /\/v\/([a-zA-Z0-9]*)/;
var SCRIPT_REGEXP = /<script type="application\/ld\+json">([\S\s]*?)<\/script>/;

/**
 * Given an HTML string, extract and return metadata.
 * @param {string} html - HTML string
 * @returns {object} Extracted metadata
 */
function parseHtml(html) {
	var m = html.match(SCRIPT_REGEXP);
	if (!m) {
		throw "Failed to parse HTML";
	}

	try {
		return JSON.parse(m[1]);
	} catch (SyntaxError) {
		throw "Failed to parse JSON";
	}
}

/**
 * Given a URL, extract and return the Vine video ID.
 * @param {string} url - URL to a video ID
 * @returns The video ID or null if not found
 */
function parseId(url) {
	var m = url.match(URL_ID_REGEXP);
	return m ? m[1] : null;
}

/**
 * Given a Vine video ID or a URL to one, return metadata about the video.
 * @param {string} url - URL or ID
 * @returns {object} Metadata about the video
 */
function info(url) {
	var id = (0, _isUrl2.default)(url) ? parseId(url) : url;
	if (!id) {
		throw "Unrecognized input, use a URL or a video ID";
	}

	var target = 'https://vine.co/v/' + id;
	return _requestPromise2.default.get(target).then(function (resp) {
		return parseHtml(resp);
	});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztrQkEyQ3dCOzs7Ozs7Ozs7Ozs7Ozs7O0FBcEN4QixJQUFNLGdCQUFnQixxQkFBaEI7QUFDTixJQUFNLGdCQUFnQiwyREFBaEI7Ozs7Ozs7QUFPTixTQUFTLFNBQVQsQ0FBbUIsSUFBbkIsRUFBeUI7QUFDeEIsS0FBSSxJQUFJLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FBSixDQURvQjtBQUV4QixLQUFJLENBQUMsQ0FBRCxFQUFJO0FBQ1AsUUFBTSxzQkFBTixDQURPO0VBQVI7O0FBSUEsS0FBSTtBQUNILFNBQU8sS0FBSyxLQUFMLENBQVcsRUFBRSxDQUFGLENBQVgsQ0FBUCxDQURHO0VBQUosQ0FFRSxPQUFPLFdBQVAsRUFBb0I7QUFDckIsUUFBTSxzQkFBTixDQURxQjtFQUFwQjtDQVJIOzs7Ozs7O0FBa0JBLFNBQVMsT0FBVCxDQUFpQixHQUFqQixFQUFzQjtBQUNyQixLQUFJLElBQUksSUFBSSxLQUFKLENBQVUsYUFBVixDQUFKLENBRGlCO0FBRXJCLFFBQU8sSUFBSSxFQUFFLENBQUYsQ0FBSixHQUFXLElBQVgsQ0FGYztDQUF0Qjs7Ozs7OztBQVVlLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDakMsS0FBSSxLQUFLLHFCQUFNLEdBQU4sSUFBYSxRQUFRLEdBQVIsQ0FBYixHQUE0QixHQUE1QixDQUR3QjtBQUVqQyxLQUFJLENBQUMsRUFBRCxFQUFLO0FBQ1IsUUFBTSw2Q0FBTixDQURRO0VBQVQ7O0FBSUEsS0FBSSxnQ0FBOEIsRUFBOUIsQ0FONkI7QUFPakMsUUFBTyx5QkFBUSxHQUFSLENBQVksTUFBWixFQUFvQixJQUFwQixDQUF5QixnQkFBUTtBQUN2QyxTQUFPLFVBQVUsSUFBVixDQUFQLENBRHVDO0VBQVIsQ0FBaEMsQ0FQaUM7Q0FBbkIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogRmV0Y2ggbWV0YWRhdGEgYWJvdXQgYSBWaW5lIHZpZGVvLlxyXG4gKi9cclxuXHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QtcHJvbWlzZSc7XHJcbmltcG9ydCBpc1VybCBmcm9tICdpcy11cmwnO1xyXG5cclxuY29uc3QgVVJMX0lEX1JFR0VYUCA9IC9cXC92XFwvKFthLXpBLVowLTldKikvO1xyXG5jb25zdCBTQ1JJUFRfUkVHRVhQID0gLzxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uXFwvbGRcXCtqc29uXCI+KFtcXFNcXHNdKj8pPFxcL3NjcmlwdD4vO1xyXG5cclxuLyoqXHJcbiAqIEdpdmVuIGFuIEhUTUwgc3RyaW5nLCBleHRyYWN0IGFuZCByZXR1cm4gbWV0YWRhdGEuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIC0gSFRNTCBzdHJpbmdcclxuICogQHJldHVybnMge29iamVjdH0gRXh0cmFjdGVkIG1ldGFkYXRhXHJcbiAqL1xyXG5mdW5jdGlvbiBwYXJzZUh0bWwoaHRtbCkge1xyXG5cdGxldCBtID0gaHRtbC5tYXRjaChTQ1JJUFRfUkVHRVhQKTtcclxuXHRpZiAoIW0pIHtcclxuXHRcdHRocm93IFwiRmFpbGVkIHRvIHBhcnNlIEhUTUxcIjtcclxuXHR9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShtWzFdKTtcclxuXHR9IGNhdGNoIChTeW50YXhFcnJvcikge1xyXG5cdFx0dGhyb3cgXCJGYWlsZWQgdG8gcGFyc2UgSlNPTlwiO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdpdmVuIGEgVVJMLCBleHRyYWN0IGFuZCByZXR1cm4gdGhlIFZpbmUgdmlkZW8gSUQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVUkwgdG8gYSB2aWRlbyBJRFxyXG4gKiBAcmV0dXJucyBUaGUgdmlkZW8gSUQgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXHJcbmZ1bmN0aW9uIHBhcnNlSWQodXJsKSB7XHJcblx0bGV0IG0gPSB1cmwubWF0Y2goVVJMX0lEX1JFR0VYUCk7XHJcblx0cmV0dXJuIG0gPyBtWzFdIDogbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdpdmVuIGEgVmluZSB2aWRlbyBJRCBvciBhIFVSTCB0byBvbmUsIHJldHVybiBtZXRhZGF0YSBhYm91dCB0aGUgdmlkZW8uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVUkwgb3IgSURcclxuICogQHJldHVybnMge29iamVjdH0gTWV0YWRhdGEgYWJvdXQgdGhlIHZpZGVvXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmZvKHVybCkge1xyXG5cdGxldCBpZCA9IGlzVXJsKHVybCkgPyBwYXJzZUlkKHVybCkgOiB1cmw7XHJcblx0aWYgKCFpZCkge1xyXG5cdFx0dGhyb3cgXCJVbnJlY29nbml6ZWQgaW5wdXQsIHVzZSBhIFVSTCBvciBhIHZpZGVvIElEXCI7XHJcblx0fVxyXG5cclxuXHRsZXQgdGFyZ2V0ID0gYGh0dHBzOi8vdmluZS5jby92LyR7aWR9YDtcclxuXHRyZXR1cm4gcmVxdWVzdC5nZXQodGFyZ2V0KS50aGVuKHJlc3AgPT4ge1xyXG5cdFx0cmV0dXJuIHBhcnNlSHRtbChyZXNwKTtcclxuXHR9KTtcclxufVxyXG4iXX0=