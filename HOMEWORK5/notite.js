let notes = [];

function displayNotes() {
    const noteList = document.getElementById("note-list");
    noteList.innerHTML = "";

    notes.forEach((note, index) => {
        const noteItem = document.createElement("div");
        noteItem.innerHTML = `<strong>${note.title}</strong><p>${note.text}</p>`;
        noteItem.addEventListener("click", () => editNote(index));
        noteList.appendChild(noteItem);

        // Adăugăm butoane pentru ștergere, fixare și plasare în prim plan
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Șterge";
        deleteButton.addEventListener("click", () => deleteNote(index));
        noteItem.appendChild(deleteButton);

        const pinButton = document.createElement("button");
        pinButton.innerHTML = note.pinned ? "Unpin" : "Pin";
        pinButton.addEventListener("click", () => togglePin(index));
        noteItem.appendChild(pinButton);

        const bringToFrontButton = document.createElement("button");
        bringToFrontButton.innerHTML = "Prim Plan";
        bringToFrontButton.addEventListener("click", () => bringToFront(index));
        noteItem.appendChild(bringToFrontButton);

        if (note.pinned) {
            noteList.insertBefore(noteItem, noteList.firstChild); // Adăugăm notiția fixată la începutul listei
        }
    });
}

function saveNote() {
    const titleInput = document.getElementById("note-title");
    const textInput = document.getElementById("note-text");

    const title = titleInput.value.trim();
    const text = textInput.value.trim();

    if (title && text) {
        notes.push({ title, text, pinned: false });
        displayNotes();
        clearEditor();
    }
}

function editNote(index) {
    const titleInput = document.getElementById("note-title");
    const textInput = document.getElementById("note-text");

    titleInput.value = notes[index].title;
    textInput.value = notes[index].text;

    notes.splice(index, 1);
    displayNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}

function bringToFront(index) {
    const noteToBringToFront = notes.splice(index, 1)[0];
    notes.unshift(noteToBringToFront); // Adăugăm notiția în prim plan
    displayNotes();
}

function togglePin(index) {
    notes[index].pinned = !notes[index].pinned;
    displayNotes();
}

function clearEditor() {
    const titleInput = document.getElementById("note-title");
    const textInput = document.getElementById("note-text");

    titleInput.value = "";
    textInput.value = "";
}

function toggleBold() {
    document.execCommand('bold', false, null);
}

function toggleItalic() {
    document.execCommand('italic', false, null);
}

function toggleList(type) {
    document.execCommand(type === 'ordered' ? 'insertOrderedList' : 'insertUnorderedList', false, null);
}

