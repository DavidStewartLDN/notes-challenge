(function(exports) {
  function testNoteCanBeAdded() {
    var note = new Note();
    text = "Hello there Gymothy";
    note.addText(text);

    assert.isTrue(note.content === "Hello there Gymothy")
  };

  testNoteCanBeAdded();
})();
