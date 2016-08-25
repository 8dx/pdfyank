'use strict'
$(function() {
	var loc = window.location.href.split("/")
	var host = loc[2];
	var ws = "ws://"+host+"/_hippie/ws";
	var socket = new WebSocket(ws);
	window.ws = socket;
	socket.onopen = function() {
            document.getElementById('conn-status').innerHTML = 'Connected';
	    send_msg("hello there")
        };
        socket.onmessage = function(e) {
	    alert("message")
	    console.log("got message")
	    console.info(e)
            var data = JSON.parse(e.data);
	    console.info(data)
	    console.log('datamsg')
	    console.info(data.msg)
            if (data.msg) {
		$("#messages").append($("<div class='msg'>"+JSON.stringify(data.msg)+"</div>"));
		}
        };

        function send_msg(message,opts) {
		console.log("sending message ", message);
		var data = { type: "message", text: message, time: Date.now()};
		$.extend(data,opts)
		console.info(data)
		socket.send(JSON.stringify(data))
        }
	$("form").submit(function(e) {
		e.preventDefault();
		send_msg("i got this for data", { form: $("form").serialize() });
		return false;
	})
})
