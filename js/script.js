// example users ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
// twitch api key = k0upqj1r19exm0krwc1buwhnqrrj5q
//https://api.twitch.tv/kraken/streams/dreamhackcs?client_id=k0upqj1r19exm0krwc1buwhnqrrj5q



$.getJSON('https://api.twitch.tv/kraken/streams/rocketleague?client_id=k0upqj1r19exm0krwc1buwhnqrrj5q', function(data) {
          if (data.stream == null) {
            $( "#current-game4" ).append("<p class='offline'> Offline </p>");
            $('.pre-stream h2').hide();
            $('.pre-stream h3:nth-child(7)').hide();
          } else {

            document.getElementById('current-game4').innerHTML = data.stream.channel.status;
            document.getElementById('channel-url4').innerHTML = ('<a href="'+data.stream.channel.url+'" target="_blank"> Visit Channel >> </a>');
            document.getElementById('followers4').innerHTML = data.stream.channel.followers;
            document.getElementById('current-viewers4').innerHTML = data.stream.viewers;
          }
      });

$.getJSON('https://api.twitch.tv/kraken/streams/GeekandSundry?client_id=k0upqj1r19exm0krwc1buwhnqrrj5q', function(data) {
          if (data.stream == null) {
            $( "#current-game" ).append("<p class='offline'> Offline </p>");
            $('.current-stream h2').hide();
            $('.current-stream h3:nth-child(7)').hide();
          } else {

            document.getElementById('current-game').innerHTML = data.stream.channel.status;
            document.getElementById('channel-url').innerHTML = ('<a href="'+data.stream.channel.url+'" target="_blank"> Visit Channel >> </a>');
            document.getElementById('followers').innerHTML = data.stream.channel.followers;
            document.getElementById('current-viewers').innerHTML = data.stream.viewers;
          }
      });




      $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?client_id=k0upqj1r19exm0krwc1buwhnqrrj5q', function(data) {
        if (data.stream == null) {
          $( "#current-game1" ).append("<p class='offline'> Offline </p>");
          $('.current-stream h2').hide();
          $('.current-stream h3:nth-child(7)').hide();
        } else {

          document.getElementById('current-game1').innerHTML = data.stream.channel.status;
          document.getElementById('channel-url1').innerHTML = ('<a href="'+data.stream.channel.url+'" target="_blank"> Visit Channel >> </a>');
          document.getElementById('followers1').innerHTML = data.stream.channel.followers;
          document.getElementById('current-viewers1').innerHTML = data.stream.viewers;
        }
      });

$.getJSON('https://api.twitch.tv/kraken/streams/OrigamiSC2?client_id=k0upqj1r19exm0krwc1buwhnqrrj5q', function(data) {
  if (data.stream == null) {
    $( "#current-game2" ).append("<p class='offline'> Offline </p>");
    $('.current-stream h2').hide();
    $('.current-stream h3:nth-child(7)').hide();
  } else {

    document.getElementById('current-game2').innerHTML = data.stream.channel.status;
    document.getElementById('channel-url2').innerHTML = ('<a href="'+data.stream.channel.url+'" target="_blank"> Visit Channel >> </a>');
    document.getElementById('followers2').innerHTML = data.stream.channel.followers;
    document.getElementById('current-viewers2').innerHTML = data.stream.viewers;
  }
});
