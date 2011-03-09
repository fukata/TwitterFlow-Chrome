// extends String.
String.prototype.trim = function() {
    return this.replace(/^[ ]+|[ ]+$/g, '');
};

// global valiables
var G_TWITTER_TABS = new Object();
var G_RE = new RegExp("");
G_RE.compile("^https?:\/\/twitter\.com");
var G_INTERVAL = 10000;

// updated tabs.
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	// check url.
	if (tab.url.match(G_RE)) {
//		chrome.tabs.executeScript(tabId, {}, clickNewResult);
		G_TWITTER_TABS[tabId] = tab;
	} else {
		if (tabId in G_TWITTER_TABS) {
			delete G_TWITTER_TABS[tabId];
		}
	}
});

function allClickNewResult() {
	for (var key in G_TWITTER_TABS) {
		var tab = G_TWITTER_TABS[key];
		chrome.tabs.executeScript(tab.id, 
				{"file": "update.js"}, 
				function(){});
	}
	
	// reload
	setTimeout(allClickNewResult, G_INTERVAL);
}

setTimeout(allClickNewResult, G_INTERVAL);
