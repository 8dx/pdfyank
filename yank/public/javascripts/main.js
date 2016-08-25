'use strict'
$(function() {
	var loc = window.location.href.split("/")
	var host = loc[2];
	var ws = "ws://"+host+"/_hippie/ws";
	var socket = new WebSocket(ws);
	socket.onopen = function() {
            document.getElementById('conn-status').innerHTML = 'Connected';
        };
        socket.onmessage = function(e) {
            var data = JSON.parse(e.data);
            if (data.msg)
		$("#messages").append($("<div class='msg'>"+data.msg+"</div>"));
        };
        function send_msg(message) {
            socket.send(JSON.stringify({ msg: message }));
        }
})
