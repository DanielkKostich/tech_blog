
const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');
  
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);

    const newFormHandler = async function(event) {
        event.preventDefault();
      
        const title = document.querySelector('input[name="post-title"]').value;
        const body = document.querySelector('textarea[name="post-body"]').value;
      
        await fetch(`/api/post`, {
          method: 'POST',
          body: JSON.stringify({
            title,
            body,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
      
        document.location.replace('/dashboard');
      };
      
      document
        .querySelector('#new-post-form')
        .addEventListener('submit', newFormHandler);

        
