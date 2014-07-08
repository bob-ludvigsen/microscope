Template.postItem.helpers({
	ownPost: function() {
        //alert(this.userId);

        if(this.userId == Meteor.userId()){
            return true;
        }
        else{

            return false;
        }
    //return this.userId == Meteor.userId();

  },
	domain:function () {
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	}



});