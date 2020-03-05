describe("#noteListView", () => {
  it("should return html list text for one array item", () => {
    var noteList = new NoteList();
    var note = new Note("To be or not to be, that is the question.");
    noteList.storeNote(note)
    var noteListView = new NoteListView(noteList);
    expect(noteListView.printHTMLString()).toBe("<ul><li><div>To be or not to be, </div></li></ul>")
  });

  it("should return html list text for two array items", () => {
    var noteList = new NoteList();
    var note1 = new Note("To be or not to be, that is the question.");
    var note2 = new Note("Surely you can't be serious. I am and don't call me Shirley!");
    noteList.storeNote(note1)
    noteList.storeNote(note2)
    var noteListView = new NoteListView(noteList);
    expect(noteListView.printHTMLString()).toBe("<ul><li><div>To be or not to be, </div></li><li><div>Surely you can't be </div></li></ul>")
  });
  
});