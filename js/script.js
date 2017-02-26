// example users ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
// twitch api key = k0upqj1r19exm0krwc1buwhnqrrj5q
//https://api.twitch.tv/kraken/streams/dreamhackcs?client_id=k0upqj1r19exm0krwc1buwhnqrrj5q




$.getJSON('https://api.twitch.tv/kraken/streams/GeekandSundry?client_id=k0upqj1r19exm0krwc1buwhnqrrj5q', function(data) {
      	    	if (data.stream == null) {
          			$( "#current-game" ).append("<p class='offline'> Offline </p>");
      					$('.first-stream h2').hide();
      					$('.first-stream h3:nth-child(7)').hide();
      		    } else {

      					document.getElementById('current-game').innerHTML = data.stream.game;
      					document.getElementById('channel-url').innerHTML = ('<a href="'+data.stream.channel.url+'" target="_blank"> Go To Channel >> </a>');
      					document.getElementById('followers').innerHTML = data.stream.channel.followers;
      					document.getElementById('current-views').innerHTML = data.stream.viewers;
      		    }
      });



      $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?client_id=k0upqj1r19exm0krwc1buwhnqrrj5q', function(data) {
    	if (data.stream == null) {
    			$( "#current-game2" ).append("<p class='offline'> Offline </p>");
					$('.second-stream h2').hide();
					$('.second-stream h3:nth-child(7)').hide();
		    } else {

					document.getElementById('current-game2').innerHTML = data.stream.game;
					document.getElementById('channel-url2').innerHTML = ('<a href="'+data.stream.channel.url+'" target="_blank"> Go To Channel >> </a>');
					document.getElementById('followers2').innerHTML = data.stream.channel.followers;
					document.getElementById('current-views2').innerHTML = data.stream.viewers;
		    }
});

$.getJSON('https://api.twitch.tv/kraken/streams/OrigamiSC2?client_id=k0upqj1r19exm0krwc1buwhnqrrj5q', function(data) {
 	if (data.stream == null) {
    			$( "#current-game3" ).append("<p class='offline'> Offline </p>");
					$('.third-stream h2').hide();
					$('.third-stream h3:nth-child(7)').hide();
		    } else {
					document.getElementById('current-game3').innerHTML = data.stream.game;
					document.getElementById('channel-url3').innerHTML = ('<a href="'+data.stream.channel.url+'" target="_blank"> Go To Channel >> </a>');
					document.getElementById('followers3').innerHTML = data.stream.channel.followers;
					document.getElementById('current-views3').innerHTML = data.stream.viewers;
		    }
});
