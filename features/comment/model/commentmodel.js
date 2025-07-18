const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  contentid:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Content',
    default:null
  },
  replayto:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'comment',
     default:null
  },
  username : {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required:true
   },
  comment : {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  // Add any other optional fields here
});

const comment = mongoose.model('comment', commentSchema);
module.exports = comment;