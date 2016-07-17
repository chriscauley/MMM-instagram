var NodeHelper = require("node_helper");
var api = require('instagram-node').instagram();

module.exports = NodeHelper.create({
	// Subclass start method.
	start: function() {
	},

	// Subclass socketNotificationReceived received.
	socketNotificationReceived: function(notification, payload) {
		if (notification === "ADD_GRAMS") {
		  this.client = api.use(payload);
      var self = this;
      this.client.user_self_feed(function(err, medias, pagination, remaining, limit) {
        if (!error) {
          self.sendSocketNotification("NEW_GRAMS", medias);
        } else { console.error(error) }
      });
			
			return;
		}
	},
});
