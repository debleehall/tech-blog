const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("entered login form handler");
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log("entered signup form handler");
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const first_name = document.querySelector('#firstName-signup').value.trim();
    const last_name = document.querySelector('#lastName-signup').value.trim();
  
    if (username && email && password && first_name && last_name) {
      console.log("meets requirements");
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password, first_name, last_name }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response);
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  
  // document
  //   .querySelector('.signup-form')
  //   .addEventListener('submit', signupFormHandler);
  

$("#loginButton").on("click", loginFormHandler);
$("#signupButton").on("click", signupFormHandler);