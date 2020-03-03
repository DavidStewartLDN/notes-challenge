describe("#Note", () => {
  it('can add a  note', () => {
    var note = new Note("My favourite language is JavaScript");
    expect(note.showNote()).toBe("My favourite language is JavaScript")
  })
});