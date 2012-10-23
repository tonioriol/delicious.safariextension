(function() {

	if(window !== window.top) {
		return;
	}

	// Setup message event listener
	safari.self.addEventListener('message', messageHandler, false);

	// Message event listener function
	function messageHandler(event) {

		if (event.name == 'getUrl') {

			var url = '?url=' + encodeURIComponent(window.location.href) + '&title=' + encodeURIComponent(document.title) + '&notes=' + encodeURIComponent(window.getSelection());
			safari.self.tab.dispatchMessage('putUrl', url);
		}
	}
})();