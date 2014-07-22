Template.user.userName = function(){
  var user = Meteor.user();
  console.log(Meteor.users.find({}, {fields: {emails: 1, profile: 1}}))
  if (user != null) {
    return user.services.google.given_name;
  } else {
    return false;
  }
}

Template.directory.designers = function () {
  return Designers.find({}, {sort: {score: -1, name: 1}});
};
