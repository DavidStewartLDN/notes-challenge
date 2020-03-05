(function(exports) {

  function SingleNoteViewer(note) {
    this.note = note
    
    
  };
  
  SingleNoteViewer.prototype.sendHTMLStringToId = function() {

    document.getElementById("app").innerHTML = ("<ul><li><div>" + this.note.showNote() + "</div></li></ul>")

  };

  exports.SingleNoteViewer = SingleNoteViewer

})(this)

var note = new Note("Favourite drink: aperol spritz")

var singleNoteViewer = new SingleNoteViewer(note)
singleNoteViewer.sendHTMLStringToId()