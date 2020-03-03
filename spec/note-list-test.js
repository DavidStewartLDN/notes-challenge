describe("#noteList", () => {
  
  it('can is empty', () => {
    var noteList = new NoteList()
    expect(Array.isArray(noteList.allNotes)).toBe(true)
  });

  it('can store a note', () => {
    var noteList = new NoteList();
    var note = new Note("Favourite drink: Aperol Spritz");
    noteList.storeNote(note)
    expect(noteList.allNotes[0].showNote()).toBe("Favourite drink: Aperol Spritz")
  })

});
