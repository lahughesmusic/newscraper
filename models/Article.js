// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: true
  },
  // link is a required string
  link: {
    type: String,
    required: true
  },
  summary: {
    type: String,
  },
   byline: {
   type: String,
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;

// the thing they said was important, keep this
// URI STRING
// mongodb://heroku_jz6l0gdq:6mvlbonfvvalgagqv3g4i5p4fh@ds235418.mlab.com:35418/heroku_jz6l0gdq