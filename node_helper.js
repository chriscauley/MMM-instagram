var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
	// Subclass start method.
	start: function() {
	},

	// Subclass socketNotificationReceived received.
	socketNotificationReceived: function(notification, payload) {
		if (notification === "ADD_GRAMS") {
		  this.client = require('instagram-node').instagram();
      this.client.use(payload);
      var self = this;
      this.client.tag('txrx',function(err, medias, pagination, remaining, limit) {
        if (!err) {
          self.sendSocketNotification("NEW_GRAMS", medias);
        } else { self.sendSocketNotification("NEW_GRAMS", err); }
      });
			
			return;
		}
	},
});
