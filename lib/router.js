Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('heroes');
  },
});

Router.onBeforeAction('loading');

Router.onBeforeAction(function() {
  if (!Meteor.userId()) {
    this.render('fullPageAtForm');
  } else {
    this.next();
  }
}, {
  except: ['atSignIn', 'atSignUp'],
});

Router.route('/', function() {
  this.redirect('/heroes');
});

Router.route('/heroes', function() {
  this.render('heroList');
}, {
  name: 'heroList',
});
