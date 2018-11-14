let notes = [];
let notesObject = {

  title: 'note title',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet quam at iaculis consequat. Etiam vitae nunc lorem. In quis vehicula sapien, aliquam facilisis mi. Curabitur finibus nunc sit amet libero accumsan, non iaculis mauris condimentum. Cras ante mauris, lacinia dictum neque quis, aliquet vulputate nunc. Suspendisse potenti. Donec accumsan elit vitae massa luctus, a sodales nibh ultrices. Duis malesuada, eros ut lobortis viverra, lectus leo tristique neque, at luctus ipsum tellus sit amet nibh. Quisque auctor, dui non imperdiet dictum, arcu libero tempor metus, non porttitor sem ipsum quis tellus. In interdum fermentum libero eget tristique. Integer in sollicitudin nunc. Proin eget ligula justo. In hac habitasse platea dictumst. Aenean elementum aliquet dolor eu accumsan.',
  snippet: 'note summary snippet'

};

function addNote() {
  let noteTitle = document.getElementById('noteTitle').value; // noteTitle: '',
  let noteBody = document.getElementById('noteBody').value; // noteBody: '',
  let noteSnippet = document.getElementById('noteSnippet').value; // noteSnippet: ''
  notes.push({
    title: noteTitle,
    body: noteBody,
    snippet: noteSnippet
  });

  displayNotes();
}

function displayNotes() {
  document.getElementById('display').innerHTML = '';
}

// for (var i = 0; i < notes.length; i++) {
//   document.getElementById('display').innerHTML += ``;
//   // notes[i]
// }

// noteName: '',
// noteDateCreate: '',
// noteDateTimeCreate: '',
// noteDateModified: '',
// noteDateTimeModified: '',
// noteTitle: '',
// noteBody: '',
// noteSnippet: ''

// if noteSnippet = '' then noteBody => 'array' => array[>20].pop => noteSnippet
// else noteSnippet
