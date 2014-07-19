ServiceConfiguration.configurations.remove({
  service: "google"
});

ServiceConfiguration.configurations.insert({
  service: "google",
});

Accounts.config({
  restrictCreationByEmailDomain: 'blackpixel.com'
});

Accounts.onCreateUser(function(options, user) {
  check(options, Object);
  check(user, Object);

  console.log(options);
  console.log(user);

  return user;
});

Meteor.publish("userData", function () {
  return Meteor.users.find({_id: this.userId});
});
