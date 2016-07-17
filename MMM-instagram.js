
/* global Module */

/* Magic Mirror
 * Module: Instagram Feed
 *
 * By chriscauley http://github.com/chriscauley/ 
 * MIT Licensed.
 */

Module.register("MMM-instagram",{

	// Default module config.
	defaults: {
		reloadInterval:	5 * 60 * 1000, // every 5 minutes
		updateInterval: 10 * 1000,
		animationSpeed: 2.5 * 1000,
	},

	// Define required scripts.
	getScripts: function() {
		return ["moment.js"];
	},

	// Define required translations.
	getTranslations: function() {
		// The translations for the defaut modules are defined in the core translation files.
		// Therefor we can just return false. Otherwise we should have returned a dictionairy.
		// If you're trying to build yiur own module including translations, check out the documentation.
		return false;
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		// Set locale.
		moment.locale(config.language);

		this.loaded = false;
		this.activeItem = 0;
		this.registerFeed();

	},

	// Override socket notification handler.
	socketNotificationReceived: function(notification, payload) {
		if (notification === "NEW_GRAMS") {
      console.log(payload);
			document.body.innerHTML = payload.body;
			//this.generateFeed(payload);

			//!this.loaded && this.scheduleUpdateInterval();
			//this.loaded = true;
		}
	},
	createElement: function(tag_name,innerHTML,attributes) {
		attributes = attributes || {};
		var e = document.createElement(tag_name);
		e.innerHTML = innerHTML;
		for (key in attributes) { e[key] = attributes[key]; }
		return e;
	},

	// Override dom generator.
	getDom: function() {
		var img = document.createElement("img");
		return img;
	},
	registerFeed: function() {
		this.sendSocketNotification("ADD_GRAMS", this.config.keys);
	},

	/* registerFeeds()
	 * Generate an ordered list of items for this configured module.
	 *
	 * attribute feeds object - An object with feeds returned by the nod helper.
	 */
	generateFeed: function(tweets) {
		this.tweets = tweets;
	},

	/* scheduleUpdateInterval()
	 * Schedule visual update.
	 */
	scheduleUpdateInterval: function() {
		var self = this;

		setInterval(function() {
			self.activeItem++;
			self.updateDom(self.config.animationSpeed);
		}, this.config.updateInterval);
	},

	/* capitalizeFirstLetter(string)
	 * Capitalizes the first character of a string.
	 *
	 * argument string string - Input string.
	 *
	 * return string - Capitalized output string.
	 */
	capitalizeFirstLetter: function(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
});
