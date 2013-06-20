var photospan = document.querySelector('div#media_photo span.img')
if (photospan) {
	console.log('got photo span')
	var photourl = photospan.style.getPropertyValue('background-image')
	photourl = photourl.substr(4, photourl.length - 5)
	console.log('photo located at ' + photourl)

	chrome.runtime.onMessage.addListener(function(req, snd, rsp) {
		if (req.msg === "igphoto") {
			console.log("Got request for photo url")
			rsp({url:photourl})
		}
	})
}
