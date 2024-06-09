function handleFormSubmit(event) {
  event.preventDefault();

  var username = event.target.username.value;
  var email = event.target.email.value;
  var phone = event.target.phone.value;

  var user = {
      username: username,
      email: email,
      phone: phone
  };

  // Store user details using email as the key
  localStorage.setItem(email, JSON.stringify(user));

  // Update the user list display
 displayUsers();
}

// Function to display users in the unordered list
function displayUsers() {
  console.log("Displaying users...");
  var userList = document.getElementById('user-list');
  userList.innerHTML = ''; // Clear existing list

  // Loop through all keys in local storage
  for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var user = JSON.parse(localStorage.getItem(key));

      // Create list items for each user
      var listItem = document.createElement('li');
      listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;

      // Create delete button
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
          deleteUser(key);
      };
    var editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.onclick = function() {
          editUser(key, user);
      };
      // Append delete button to list item
      listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
      // Append list item to user list
      userList.appendChild(listItem);
  }
}


// Function to delete user from local storage and update display
function deleteUser(email) {
  // Remove user from local storage
  localStorage.removeItem(email);

  // Update the user list display
  displayUsers();
}
function editUser(email, user) {
  // Remove user from local storage
  localStorage.removeItem(email);

  // Populate input fields with existing values
  document.getElementById('username').value = user.username;
  document.getElementById('email').value = user.email;
  document.getElementById('phone').value = user.phone;

  // Update the user list display
  displayUsers();
}
// Initial call to display users on page load
document.addEventListener('DOMContentLoaded', displayUsers);

//module.exports = handleFormSubmit;