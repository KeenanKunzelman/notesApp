console.log('starting app.js');

const yargs = require('yargs');
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

const titleOps = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOps = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
  title: titleOps,
  body: bodyOps
 })
 .command('read', 'Read a note', {
   title: titleOps
 })
 .command('remove', 'Removes a note', {
   title: titleOps
 })
 .command('list', 'Lists all notes')

.help()
.argv;

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
    var allNotes = notes.getAll();
    console.log();
    console.log();
    console.log(`printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
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
