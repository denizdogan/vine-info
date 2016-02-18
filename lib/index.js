/**
 * Fetch metadata about a Vine video.
 */

import request from 'request-promise';
import isUrl from 'is-url';

const URL_ID_REGEXP = /\/v\/([a-zA-Z0-9]*)/;
const SCRIPT_REGEXP = /<script type="application\/ld\+json">([\S\s]*?)<\/script>/;

/**
 * Given an HTML string, extract and return metadata.
 * @param {string} html - HTML string
 * @returns {object} Extracted metadata
 */
function parseHtml(html) {
	let m = html.match(SCRIPT_REGEXP);
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
	let m = url.match(URL_ID_REGEXP);
	return m ? m[1] : null;
}

/**
 * Given a Vine video ID or a URL to one, return metadata about the video.
 * @param {string} url - URL or ID
 * @returns {object} Metadata about the video
 */
export default function info(url) {
	let id = isUrl(url) ? parseId(url) : url;
	if (!id) {
		throw "Unrecognized input, use a URL or a video ID";
	}

	let target = `https://vine.co/v/${id}`;
	return request.get(target).then(resp => {
		return parseHtml(resp);
	});
}
