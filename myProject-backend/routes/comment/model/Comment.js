const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment');

const now = moment();

let CommentSchema = new Schema ({
    // owner: {type: Schema.Types.ObjectId, ref:'user'},
    comment: {type: String, default: ''},
    // user_id: {type: Schema.Types.ObjectId, ref: 'user'},
    timestamp: {type: String, default: now.format('dddd, MMMM Do YYYY, h:mm:ss a')}

        
})

module.exports = mongoose.model('Comment', CommentSchema)