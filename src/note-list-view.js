(function(exports) {

  function NoteListView(newNoteList) {

    this.noteList = newNoteList
    this.output = []

  }


  NoteListView.prototype.printHTMLString = function() {
    beginning = "<li><div>"
    ending = "</div></li>"

    // use # to stay on same page in href link below

    this.noteList.allNotes.forEach(element => {
       this.output.push((beginning + `<a href="#notes/${element.id}">` + element.showNote().substring(0, 20) + '</a>' + ending).toString())
    });

    return("<ul>"+(this.output.join(""))+"</ul>")
  
  }


  exports.NoteListView = NoteListView

})(this)