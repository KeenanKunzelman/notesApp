console.log('starting app.js');

const yargs = require('yargs');
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Process', process.argv);
console.log('Yargs', argv);



if (command == 'add') {
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log("note created");
    notes.logNote(note);
  }else {
    console.log("note title taken");
  }
}

else if (command == 'list') {
  notes.getAll();
}

else if (command == 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'No note was removed';
  console.log(message);
}

else if (command == 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log();
    console.log();
    console.log("Note has been retrieved!");
    notes.logNote(note);
  }else {
    console.log();
    console.log();
    console.log("Note does not exist");
  }
}

else {
    console.log("command not recognized");
}
