
MessageWidget = {
   init : function() {
     var self = this;
     $.getJSON('./data/status.json', function(data){ self.processStatus(data)});
   },

   processStatus: function (data) {
     var mood = (data && this.isHappy(data.message)) ? 'happy' : 'sad';
     $('body').addClass(mood + 'Gradiant');
     $('#message p').addClass(mood + 'Color');

     $('#message p').text(data.message && data.message !== '' ? data.message : "don't know!?");
   },

   isHappy: function(message) {
     if (!message) return false;

     return (message.toLowerCase().indexOf('yes') !== -1
             || message.indexOf(':)') !== -1
             || message.indexOf(':-)') !== -1);
   }

};

(function() {
    MessageWidget.init();
}());
