// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var NoteSchema = new Schema({
  // Just a string
  article_id: {
    type: Schema.Types.ObjectId
  },
  body: {
    type: String
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the notes
// These ids are referred to in the Article model

// Create the Note model with the NoteSchema
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;



// the thing they said was important, keep this
// URI STRING
// mongodb://heroku_jz6l0gdq:6mvlbonfvvalgagqv3g4i5p4fh@ds235418.mlab.com:35418/heroku_jz6l0gdq