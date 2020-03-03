
describe("#Note", () => {
  it('can add a  note', () => {
    var note = new Note();
    text = "My favourite language is JavaScript";
    note.addText(text);
    expect(note.content).toBe("My favourite language is JavaScript")
  })
});

