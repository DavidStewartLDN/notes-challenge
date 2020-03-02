(function(exports) {
  function testNoteCanBeAdded() {
    var note = new Note();
    text = "Hello there Gymothy";
    note.addText(text);

    if (note.content !== "Hello there Gymothy") {
      throw new Error("Note has not worked, give up on life");
    } else {
      console.log("Davidos is the boss")
    }
  };

  testNoteCanBeAdded();
})();

