(function(exports) {

  function Note(text) {
    this.text = text
  };

  Note.prototype.showNote = function() {
    return this.text
  }

  // this allows the notes class to be viewed by the tests

  exports.Note = Note

  // the final "this" runs the code

})(this);