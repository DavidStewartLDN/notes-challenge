var assert = {
  isTrue: function(msg, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion FAILED: " + msg + " is not truthy");
    }
    else console.log("Passed test: " + msg)
  }
};