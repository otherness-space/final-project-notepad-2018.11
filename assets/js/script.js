let notes = [];

function addNote() {
  // get values from input
  let noteTitle = document.getElementById('noteTitle').value;
  let noteBody = document.getElementById('noteBody').value;
  // let noteSnippet = document.getElementById('noteSnippet').value;

  notes.push({
    title: noteTitle,
    body: noteBody,
    // snippet: noteSnippet
  });
document.getElementById('noteTitle').value = ``;
document.getElementById('noteBody').value = ``;
  displayNotes();
  console.log(notes);
}

function displayNotes() {
  document.getElementById('displayArchive').innerHTML = '';
    for (var i = 0; i < notes.length; i++) {
      document.getElementById('displayArchive').innerHTML +=
      `
      <div class="text-secondary">
      <i class="material-icons" data-toggle="tooltip" data-html="true" title="open note" onclick="openNote(${i})">note</i>
      <i class="material-icons" data-toggle="tooltip" data-html="true" title="delete" ondblclick="deleteNote(${i})">clear</i>
      ${notes[i].title}
      </div>
      `;
      console.log(displayArchive);
    }
  // document.getElementById('displayNotePad').innerHTML = '';
  //   for (var i = 0; i < notes.length; i++) {
  //     document.getElementById('displayNotePad').innerHTML +=
  //     `
  //     ${notes[i].title}
  //     ${notes[i].body}
  //     ${notes[i].snippet}
  //     `;
  //   }
  }

  function openNote(index) {
    document.getElementById('noteTitle').value =
    `
    ${notes[index].title}
    `
    document.getElementById('noteBody').value =
    `
    ${notes[index].body}
    `
    // document.getElementById('noteTitle').innerHTML = `${notes[index].body}`
    console.log(notes[index].title)
    console.log(notes[index].body)
    displayNotes();
  }

  function newNote(){
    document.getElementById('noteTitle').value = ``;
    document.getElementById('noteBody').value = ``;
      displayNotes();
      console.log('newNote');
  }

  function deleteNote(index) {
    notes.splice(index, 1);

    displayNotes();
  }
