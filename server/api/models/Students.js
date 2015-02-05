/**
* Students.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {

        id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },

        fullname: {
            type: 'string',
            //required: true
        },

        score: {
            type: 'integer',
            defaultsTo: 0
        },

        onField: {
            type: 'boolean'
        }
    }
};

