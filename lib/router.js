Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('heroList', {path: '/heroes'});
});