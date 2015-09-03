Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function waitOn() {
    return Meteor.subscribe('heroes');
  },
});

Router.onBeforeAction('loading');

Router.onBeforeAction(function beforeAction() {
  if (!Meteor.userId()) {
    this.render('fullPageAtForm');
  } else {
    this.next();
  }
}, {
  except: ['atSignIn', 'atSignUp'],
});

Router.route('/', function root() {
  this.redirect('/heroes');
});

Router.route('/heroes', function heroes() {
  this.render('heroList');
}, {
  name: 'heroList',
});
