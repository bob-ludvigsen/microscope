/**
 * Created by pfu on 21/05/14.
 */
Template.postPage.helpers({
    comments: function() {
        return Comments.find({postId: this._id});
    }
});