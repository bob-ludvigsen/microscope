Meteor.publish('posts', function() {
return Posts.find();
//return Posts.find({'author':'Tom Coleman'});
});

Meteor.publish('comments', function(postId) {
    return Comments.find({postId: postId});
});



Meteor.publish('notifications', function() {
    return Notifications.find();
});