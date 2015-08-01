(function(){
  var ccc = {
    room: {
      name: $("#room-name > .bar-value").text(),
      host: $("#room-host > .username").text(),
      wel: $(".cm > .msg > div").eq(1).text()
    },
    
    start: function() {
      API.on(API.CHAT, ccc.chatCheck);
      $(".cm > .msg > div").eq(1).text();
      
      API.chatLog("CustomChat is now Loaded.");
    },
    
    chatCheck: function(data) {
        if (data.type === "message") {
          $("#chat-messages").append("<div class="cm message"><div class="badge-box clickable"><i class="bdg bdg-style-s01 s"></i></div><div class="msg"><div class="from staff"><i class="icon icon-chat-host"></i><span class="un clickable">"+data.un+"</span></div><div class="text">"+data.message+"</div></div></div>");
        }
      }
  };
}).call(this);
