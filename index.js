
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Collect user details
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    console.log(phone+'sd');
    // Store user details in local storage
    localStorage.setItem('Username', username);
    localStorage.setItem('Email', email);
    localStorage.setItem('Phone', phone);
  }
  
  
  const form = document.getElementById('user-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Collect user details
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
        console.log(phone);
      // Store user details in local storage
      localStorage.setItem('Username', username);
      localStorage.setItem('Email', email);
      localStorage.setItem('Phone', phone);
  
      // Optionally, you can add a message to confirm data storage
      alert('User details have been saved!');
    });
  
  