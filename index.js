(function(){
  var ccc = {
    room: {
      name: $("#room-name > .bar-value").text(),
      host: $("#room-host > .username").text(),
      wel: $(".cm > .msg > div").eq(1).text()
      if (wel.search("@BOT=")) {
        API.chatLog("Found Bot!");
      }
    },
    
    start: function() {
      API.on(API.CHAT, ccc.chatCheck);
      $(".cm > .msg > div").eq(1).text();
      
      API.chatLog("CustomChat is now Loaded.");
    }
  };
}).call(this);
