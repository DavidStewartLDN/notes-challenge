describe("#noteControllerView", () => {
  it("should update html correctly in main window", () => {

    var noteController = new NoteController("Favourite drink: G&T");
    noteController.sendHTMLStringToId();
    expect(document.getElementById("app").innerHTML).toBe("<ul><li><div>Favourite drink: G&amp;T</div></li></ul>")
  });
  
  
});