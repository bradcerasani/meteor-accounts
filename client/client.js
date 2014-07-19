Meteor.subscribe("userData");

Template.results = function() {
  return Users.find();
}
