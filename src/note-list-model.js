(function(exports) {

  function NoteList() {

    this.allNotes = [];

  };

  NoteList.prototype.storeNote = function(note) {

    this.allNotes.push(note)
    
  }

  exports.NoteList = NoteList

})(this);