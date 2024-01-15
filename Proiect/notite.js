// Vom folosi un array pentru a stoca notițele
const notes = [];

// Funcția pentru afișarea notițelor
function displayNotes() {
  const notesList = document.getElementById("notes-list");
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    const noteItem = document.createElement("div");
    noteItem.className = "note-item";
    noteItem.innerHTML = `
      <p>${note}</p>
      <button onclick="editNote(${index})">Edit</button>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    notesList.appendChild(noteItem);
  });
}

// Funcția pentru adăugarea unei noi notițe
function addNote() {
  const newNote = document.getElementById("new-note").value.trim();
  if (newNote) {
    notes.push(newNote);
    displayNotes();
    document.getElementById("new-note").value = "";
  }
}

// Funcția pentru editarea unei notițe
function editNote(index) {
  const updatedNote = prompt("Edit your note:", notes[index]);
  if (updatedNote !== null) {
    notes[index] = updatedNote.trim();
    displayNotes();
  }
}

// Funcția pentru ștergerea unei notițe
function deleteNote(index) {
  const confirmDelete = confirm("Are you sure you want to delete this note?");
  if (confirmDelete) {
    notes.splice(index, 1);
    displayNotes();
  }
}

// Funcția pentru a naviga către pagina de dashboard
function goToDashboard() {
  window.location.href = 'dashboard.html';
}

// Funcția pentru filtrarea notițelor
function filterNotes() {
  const filterValue = document.getElementById("filter-notes").value.toLowerCase();
  const filteredNotes = notes.filter((note) => note.toLowerCase().includes(filterValue));
  displayFilteredNotes(filteredNotes);
}

// Funcția pentru afișarea notițelor filtrate
function displayFilteredNotes(filteredNotes) {
  const notesList = document.getElementById("notes-list");
  notesList.innerHTML = "";

  filteredNotes.forEach((note, index) => {
    const noteItem = document.createElement("div");
    noteItem.className = "note-item";
    noteItem.innerHTML = `
      <p>${note}</p>
      <button onclick="editNote(${index})">Edit</button>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    notesList.appendChild(noteItem);
  });
}
