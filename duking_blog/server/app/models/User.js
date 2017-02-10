/**
 * Created by duking on 2016/12/30.
 */
var Waterline = require('waterline');
module.exports = Waterline.Collection.extend({

    identity: 'user',
    connection: 'mysql',

    attributes: {
        ID: {
            type: 'integer',
            primaryKey:true,
        },

        Name: {
            type: 'string'
        },

        Email: {
            type: 'string'
        },

        Password: {
            type: 'string'
        }
    }
});