import Ember from 'ember';

export default Ember.ObjectController.extend({


    actions: {

        toggleOnField: function(student){
            student.toggleProperty('onField');
            student.save();
        },

        deleteRecord: function(student){
            student.deleteRecord();
            student.save();
        },

        increaseScore: function(student){
            student.incrementProperty('score');
            student.save();
        }

    }

});
