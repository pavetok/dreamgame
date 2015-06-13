Meteor.methods({
	reset : function() {
		Heroes.remove({});
	}
});
