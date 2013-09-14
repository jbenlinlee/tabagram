var igPhotoPagePattern = /instagram\.com\/p\/(.+)\//

function showImage(url, tab) {
	if (url != null) {
		chrome.tabs.update(tab.id, {url:url})
	}
}

function showIfValid(tabId, changeInfo, tab) {
	if (igPhotoPagePattern.test(tab.url)) {
		chrome.pageAction.onClicked.addListener(function(tab) {
			chrome.tabs.sendMessage(tab.id, {msg:"igphoto"}, function(data) {
				if (data !== undefined) {
					showImage(data.url, tab)
				}
			})
		})

		chrome.pageAction.show(tabId)
	}
}

chrome.tabs.onUpdated.addListener(showIfValid)
