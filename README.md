# vine-info

JavaScript library for getting video metadata from Vine.

## Example

```javascript
import info from 'vine-info';

info('in0W1K9d9KH').then(data => {
	console.log(data.author.name);
});
```

### Typical content

The typical metadata returned is structured something similar to the following.
Vine doesn't seem to have any public API, so this can change at any time.

```json
{
	"@context": "http://schema.org",
	"@type": "SocialMediaPosting",
	"url": "https://vine.co/v/<ID>",
	"datePublished": "2016-01-9100:00:01",
	"author": {
		"@type": "Person",
		"name": "John Doe",
		"image": "<Author's image URL>",
		"url": "<Author's Vine URL>"
	},
	"articleBody": "My pretty pony",
	"image": "https://v.cdn.vine.co/r/...",
	"interactionCount": [{
		"@type": "UserInteraction",
		"userInteractionType": "http://schema.org/UserLikes",
		"value": "1700"
	}, {
		"@type": "UserInteraction",
		"userInteractionType": "http://schema.org/UserShares",
		"value": "155"
	}, {
		"@type": "UserInteraction",
		"userInteractionType": "http://schema.org/UserComments",
		"value": "32"
	}, {
		"@type": "UserInteraction",
		"userInteractionType": "http://schema.org/UserViews",
		"value": "70203"
	}],
	"sharedContent": {
		"@type": "VideoObject",
		"name": "My pretty pony",
		"description": "",
		"thumbnailUrl": "<Image URL>",
		"uploadDate": "2016-01-01T00:00:01",
		"contentUrl": "<Video URL>",
		"embedUrl": "<Embed URL>",
		"interactionCount" : "72090"
	}
}
```
