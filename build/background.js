/*global chrome*/
chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: { urlContains: 'youtube.com'}
				})
			],
			actions: [ new chrome.declarativeContent.ShowAction() ]
		}]);
	});
});

chrome.runtime.onMessage.addListener(function(message) {
	var url = 'http://localhost:8000/download?';
	var queryString = Object.keys(message).map(key => key + '=' + message[key]).join('&');
	url += queryString;
	console.log(url);
	chrome.downloads.download({url:url,
		filename: "YoutubeDownloader/" + message.filename +'.' + message.format}, function(downID) {
			chrome.downloads.show(downID);
	});
});
chrome.downloads.onChanged.addListener(function (e) {
	if (typeof e.state !== 'undefined') {
		if (e.state.current === 'complete') {
			console.log('Download ID ' + e.id + ' has completed');
		document.getElementById('message').innerHTML = message;

		}
	}
});