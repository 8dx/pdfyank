package yank;
use Dancer ':syntax';
use Data::Dumper;
use Dancer::Plugin::WebSocket;
our $VERSION = '0.1';
use feature 'say';

get '/' => sub {
    template 'index';
};

ws_on_message sub {
	my $data = shift;
	warn "i got a fucking message! ";
	warn Dumper $data;
	my $c = Dumper $data;
	my $res = { 
		  type => 'message',
		  text =>  $c,
		  time => time,
		  respond => rand
	 };
        say "herez da ws_send object doe";
	say Dumper $res;
	say "sending now...";
	ws_send $res;
	ws_send {
		type => 'rescue'
	}
};

ws_on_new_listener sub {
	ws_send { msg => "welcome to hell my nigga <3" };
};

any '/send_msg' => sub {
        my $msg = params->{msg};
        ws_send {
		type => "message",
		text => $msg,
		time => time,
		respond => 0
	}
};

true;
