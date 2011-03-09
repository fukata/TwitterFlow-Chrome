var update = document.getElementById("results_update");
// for old ui
if (update!=null) {
	if (update.innerHTML.trim() != '') {
		// call onclick function.
		var evt = document.createEvent( "MouseEvents" );
		evt.initEvent( "click", false, true );
		var rs = update.dispatchEvent( evt );
	}
} else {
	// for new ui
	var results = document.getElementsByClassName('new-tweets-bar', 'stream');
	if (results!=null && results.length>0) {
		for (var i=0; i<results.length; i++) {
			var newTweet = results[i];
			if (newTweet.innerHTML.trim() != '') {
				// call onclick function.
				var evt = document.createEvent( "MouseEvents" );
				evt.initEvent( "click", true, false );
				var rs = newTweet.dispatchEvent( evt );
			}
		}
	}
}

