(function(exports) {

  function NoteListView(newNoteList) {

    this.noteList = newNoteList
    this.output = []

  }


  NoteListView.prototype.printHTMLString = function() {
    beginning = "<li><div>"
    ending = "</div></li>"

    this.noteList.allNotes.forEach(element => {
       this.output.push((beginning + element.showNote() + ending).toString())
    });
    return("<ul>"+(this.output.join(""))+"</ul>")
  
    // return beginning + this.noteList.allNotes[0].showNote() + ending
  }


  exports.NoteListView = NoteListView

})(this)