Meteor.startup(function() {
  var names = ["Mike Einziger", "Brandon Boyd", "DJ Killmore"];
  for (var i = 0; i < names.length; i++) {
    Designers.insert({name: names[i], score: Math.floor(Random.fraction()*10)*5});
  }
});

ServiceConfiguration.configurations.insert({
  service: "google",
  clientId: "***",
  secret: "***"
});

Accounts.config({
  restrictCreationByEmailDomain: 'blackpixel.com'
});

Accounts.onCreateUser(function(options, user) {
  check(options, Object);
  check(user, Object);
  return user;
});
