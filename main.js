// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas 
// except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.



function list(names){
    // regex to check look for the last comma
    var re = /,(?!.*,)/gmi;
    // made the object of names into a array of names
    var objectNameToArray = names.map(function (symbol) {
        return symbol.name;
    });
    // returns empty string if array is empty
    if (names.length === 0) {
        return '';
    }
    if (names.length === 1) {
        return names[0].name;
    }
    if (names.length === 2) {
        return objectNameToArray.join(" & ");
    }
    if (names.length >= 3) {
        // joins the array with comma space
        // replaces the string last comma with a ampersand
       return objectNameToArray.join(", ").replace(re, " &");
    }
  }

  list([ {name: 'Bart'}, {name: 'Lisa'} ]);
  list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]);