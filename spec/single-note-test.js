describe("#singlenoteView", () => {
  it("should update html correctly in single note window", () => {

    var note = new Note("Favourite drink: G&T efahsdijisdfjiosgjskdlksfhjdfnkfdsnlfdsnfds")
    var singleNoteViewer = new SingleNoteViewer(note);
    singleNoteViewer.sendHTMLStringToId();
    expect(document.getElementById("app").innerHTML).toBe("<ul><li><div>Favourite drink: G&amp;T efahsdijisdfjiosgjskdlksfhjdfnkfdsnlfdsnfds</div></li></ul>")
  });
  
  
});