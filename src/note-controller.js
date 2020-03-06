(function(exports) {

  function NoteController(newNoteList) {

    this.noteList = newNoteList
    this.noteList.storeNote("Favourite drink: aperol spritz")
    this.noteListView = new NoteListView(this.noteList)

  };

  NoteController.prototype.sendHTMLStringToId = function() {

    document.getElementById("app").innerHTML = this.noteListView.printHTMLString();

  };

  NoteController.prototype.findNoteById = function(unparsedNoteId) {

    var noteText;

    noteId = Number(unparsedNoteId.substring(6))

    this.noteList.allNotes.forEach(element => {
      if (element.id === noteId) {
        noteText = element.showNote()
      }
      // this.output.push((beginning + `<a href="#notes/${element.id}">` + element.showNote().substring(0, 20) + '</a>' + ending).toString())
   });

   return noteText

  }

  exports.NoteController = NoteController

})(this)

var noteList = new NoteList()

var noteController = new NoteController(noteList)
noteController.sendHTMLStringToId()