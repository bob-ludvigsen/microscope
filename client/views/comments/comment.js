/**
 * Created by pfu on 21/05/14.
 */
Template.comment.helpers({
    submittedText: function() {
        return new Date(this.submitted).toString();
    }
});