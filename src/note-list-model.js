(function(exports) {

  function NoteList() {
    this.count = 0 
    this.allNotes = [];

  };

  NoteList.prototype.storeNote = function(text) {
    var note = new Note(text)
    note.id = this.count
    this.allNotes.push(note)
    this.count++
  }

  exports.NoteList = NoteList

})(this);