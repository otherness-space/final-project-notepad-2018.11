let notes = [];

function saveNote(){
  let noteTitle = document.getElementById('noteTitle').value;

  notes.push({
    title: noteTitle
  });

  displayNotes();
}

function displayNotes(){
  document.getElementById('displayArchive').innerHTML = '';

  for (let i = 0; i < notes.length; i++) {
    document.getElementById('display').innerHTML += `<div id="displayArchiveRow" class=" display-archive-row" ondblclick="display-archive-row"></div>`
    notes[i]
  }
}
