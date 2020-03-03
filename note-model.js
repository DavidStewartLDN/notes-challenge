// Code is in a file called note-model.js.
// Code is wrapped in the module pattern.



// Takes the text of a note upon instantiation e.g. My favourite language is JavaScript.


// Stores the text in a text property on the note.



// Has a method that will return the note text.

(function(exports) {

  function Note() {
    this.content = ""
  };

  Note.prototype.addText = function(text) {
    this.content = text
  }

  // this allows the notes class to be viewed by the tests

  exports.Note = Note

  // the final "this" runs the code

})(this);