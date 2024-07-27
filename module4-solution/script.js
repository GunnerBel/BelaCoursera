// Array of names
var names = ["James", "John", "Dennis", "Mitali","Kevin", "Bela"];

// Loop over the array of names
for (var i = 0; i < names.length; i++) {
  // Get the first letter of the current name
  var firstLetter = names[i].charAt(0).toLowerCase();

  // Check if the first letter is 'j'
  if (firstLetter === 'j') {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}
