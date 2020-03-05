(function(exports) {

  function NoteController(string) {

    this.note = new Note(string)
    this.noteList = new NoteList()
    this.noteList.storeNote(this.note)
    this.noteListView = new NoteListView(this.noteList)

  };

  NoteController.prototype.sendHTMLStringToId = function() {

    document.getElementById("app").innerHTML = this.noteListView.printHTMLString();

  };

  exports.NoteController = NoteController

})(this)

var noteController = new NoteController("Favourite drink: aperol spritz")
noteController.sendHTMLStringToId()