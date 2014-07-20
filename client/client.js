Template.user.userName = function(){
  var user = Meteor.user();
  if (user != null) {
    return user.services.google.given_name;
  } else {
    return false;
  }
}
