// Definirea unui obiect AdminPanel
const AdminPanel = {
    users: [
        { id: 1, username: "user1", role: "user" },
        { id: 2, username: "user2", role: "admin" },
        // Adaugă mai mulți utilizatori aici
    ],
  
    // Funcție pentru afișarea listei de utilizatori
    displayUserList: function () {
        const userList = document.getElementById("users");
        userList.innerHTML = "";
  
        this.users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = `${user.username} - ${user.role}`;
            listItem.addEventListener("click", () => this.editUser(user.id));
            userList.appendChild(listItem);
        });
    },
  
    // Funcție pentru editarea unui utilizator
    editUser: function (userId) {
        const userToEdit = this.users.find(user => user.id === userId);
  
        if (userToEdit) {
            document.getElementById("edit-username").value = userToEdit.username;
            document.getElementById("edit-role").value = userToEdit.role;
            document.getElementById("edit-form").addEventListener("submit", event => {
                event.preventDefault();
                this.saveChanges(userId);
            });
        }
    },
  
    // Funcție pentru salvarea modificărilor la un utilizator
    saveChanges: function (userId) {
        const editedUser = this.users.find(user => user.id === userId);
  
        if (editedUser) {
            editedUser.username = document.getElementById("edit-username").value;
            editedUser.role = document.getElementById("edit-role").value;
            this.displayUserList();
        }
    },
  
    // Funcție pentru adăugarea unui nou utilizator
    addUser: function () {
        const newUsername = prompt("Enter the username for the new user:");
        if (newUsername) {
            const newUser = {
                id: this.users.length + 1,
                username: newUsername,
                role: "user"
            };
            this.users.push(newUser);
            this.displayUserList();
        }
    },
  
    // Funcție pentru eliminarea unui utilizator
    removeUser: function () {
        const userToDelete = prompt("Enter the username to remove:");
        const userIndex = this.users.findIndex(user => user.username === userToDelete);
  
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            this.displayUserList();
        } else {
            alert("User not found!");
        }
    },
  
    // Funcție pentru logout
    logout: function () {
        alert("Logged out successfully!");
        // Simulează redirecționarea către pagina de autentificare sau altă acțiune dorită
        window.location.href = '/';
    }
  };
  
  // Afișează lista de utilizatori la încărcarea paginii
  document.addEventListener("DOMContentLoaded", () => AdminPanel.displayUserList());
  