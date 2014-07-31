'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

var QuestionSchema = new Schema({
  title: String,
  body: String,
  asker_id: ObjectId,
  answered: Boolean,
  subscriber_ids: [ObjectId],
  answer: {
    body: String,
    responder_ids: [ObjectId]
  }
});

module.exports = mongoose.model('Question', QuestionSchema);
