/* global Module */

/* Magic Mirror
 * Module: Omni
 *
 * By Werner Venter http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("omni",{

	// Default module config.
	defaults: {
		text: "Hello World!"
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
