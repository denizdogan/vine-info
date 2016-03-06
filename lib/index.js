import request from 'request-promise';
import isUrl from 'is-url';
import when from 'when';

const SCRIPT_REGEXP = /<script type="application\/ld\+json">([\S\s]*?)<\/script>/;
const ID_REGEXP = /^\w{11}$/;

/**
 * Given an HTML string, extract and return metadata.
 * @param {string} html - HTML string
 * @returns {object} Extracted metadata
 */
function parseHtml(html) {
	let m = html.match(SCRIPT_REGEXP);
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
export default function info(id) {

	// make sure the ID is a valid vine ID
	if (!id.match(ID_REGEXP))
		return when.reject('Invalid Vine ID');

	let target = `https://vine.co/v/${id}`;
	return request.get(target).then(resp => {
		try {
			return parseHtml(resp);
		} catch (err) {
			return when.reject(err);
		}
	});
}
