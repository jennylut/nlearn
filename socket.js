let ws = new WebSocket('ws://localhost:9999');
ws.open = function() {
	ws.send('hello world')
}
ws.onmessage = function (res) {
	console.log(res)
	console.log(res.data)
}