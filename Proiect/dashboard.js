// Adaugă notițele ca o proprietate în obiectul currentUser
const currentUser = {
  username: "user2", // Schimbă username-ul în funcție de utilizatorul curent
  role: "admin",
  notes: "", // Inițial notițele sunt goale
};

const users = [
  { username: "user1", role: "user" },
  { username: "user2", role: "admin" },
  // Adaugă mai mulți utilizatori aici
];

const currentUserIndex = 1; // Indicele utilizatorului curent în array (pentru simularea sesiunii)

function displayDashboardInfo() {
  const userSection = document.getElementById("user-section");
  const adminSection = document.getElementById("admin-section");
  const notesSection = document.getElementById("notes-section"); // Adăugat pentru manipularea secțiunii de note

  if (currentUser.role === "user") {
    userSection.innerHTML = `<p>Hello, ${currentUser.username}! This is the user section.</p>`;
    adminSection.style.display = "none";
  } else if (currentUser.role === "admin") {
    adminSection.innerHTML = `<p>Hello, ${currentUser.username}! This is the admin section.</p>`;
    userSection.style.display = "none";
  }

  // Afisează notele în secțiunea de note
  notesSection.innerHTML = `<h2>Notes Section</h2>
    <textarea id="notes" rows="5" placeholder="Write your notes here...">${currentUser.notes}</textarea>
    <button onclick="saveNotes()">Save Notes</button>
    <button onclick="clearNotes()">Clear Notes</button>
    <button onclick="goToNotesPage()">Go to Notes Page</button>`;

  // Adăugăm funcționalități de filtrare și sortare (doar pentru exemplu)
  const filterInput = document.createElement("input");
  filterInput.type = "text";
  filterInput.placeholder = "Filter users by username";
  filterInput.addEventListener("input", () => filterUsers(filterInput.value));

  const sortButton = document.createElement("button");
  sortButton.textContent = "Sort Users";
  sortButton.addEventListener("click", sortUsers);

  userSection.appendChild(filterInput);
  userSection.appendChild(sortButton);
}

function filterUsers(filterValue) {
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(filterValue.toLowerCase())
  );
  console.log("Filtered Users:", filteredUsers);
  // Aici poți face orice vrei cu utilizatorii filtrați (afisare, manipulare, etc.)
}

function sortUsers() {
  const sortedUsers = [...users].sort((a, b) => a.username.localeCompare(b.username));
  console.log("Sorted Users:", sortedUsers);
  // Aici poți face orice vrei cu utilizatorii sortați (afisare, manipulare, etc.)
}

function saveNotes() {
  currentUser.notes = document.getElementById("notes").value;
  alert("Notes saved successfully!");
}

function clearNotes() {
  currentUser.notes = "";
  document.getElementById("notes").value = "";
  alert("Notes cleared successfully!");
}

function goToNotesPage() {
  alert("Redirect to Notes Page!");
  // Simulează redirecționarea către pagina de notițe sau altă acțiune dorită
}

function logout() {
  alert("Logged out successfully!");
  // Simulează redirecționarea către pagina de autentificare sau altă acțiune dorită
}

document.addEventListener("DOMContentLoaded", displayDashboardInfo);


// Funcția pentru a naviga către pagina de notițe
function goToNotes() {
  window.location.href = 'notite.html';
}
const notes = [];

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

function addNote() {
  const newNote = document.getElementById("new-note").value.trim();
  if (newNote) {
    notes.push(newNote);
    displayNotes();
    document.getElementById("new-note").value = "";
    notify("Note added successfully!");
  }
}

function editNote(index) {
  const updatedNote = prompt("Edit your note:", notes[index]);
  if (updatedNote !== null) {
    notes[index] = updatedNote.trim();
    displayNotes();
    notify("Note updated successfully!");
  }
}

function deleteNote(index) {
  const confirmDelete = confirm("Are you sure you want to delete this note?");
  if (confirmDelete) {
    notes.splice(index, 1);
    displayNotes();
    notify("Note deleted successfully!");
  }
}

function clearNotes() {
  notes.length = 0;
  displayNotes();
  notify("All notes cleared successfully!");
}

// Funcția pentru notificări
function notify(message) {
  const notification = document.getElementById("notification");
  notification.innerText = message;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

document.addEventListener("DOMContentLoaded", displayNotes);
