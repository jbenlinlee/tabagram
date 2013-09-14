
chrome.runtime.onMessage.addListener(function(req, snd, rsp) {
	if (req.msg === "igphoto") {
		var photospan = document.querySelector('div.Item div.LikeableFrame.iMedia div.Image.iLoaded.iWithTransition.Frame')
		if (photospan) {
			var photourl = window.getComputedStyle(photospan).getPropertyValue('background-image')
			photourl = photourl.substr(4, photourl.length - 5)
			rsp({url:photourl})
		}
	}
})
