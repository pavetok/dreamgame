Router.configure({
    layoutTemplate: "layout",
    loadingTemplate: "loading",
    waitOn: function() { return Meteor.subscribe("heroes"); }
});

Router.map(function() {
    this.route("heroList", {path: "/heroes"});
});

Router.onBeforeAction("loading");