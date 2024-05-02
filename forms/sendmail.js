const form = document.querySelector('.php-email-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting in the default way
console.log(form)
  // get the form data and encode it in URL-encoded format
  const formData = new FormData(form);
  const encodedData = new URLSearchParams(formData).toString();

  // create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // set up the request
  xhr.open('POST', 'sendmail.js');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // handle the response
  xhr.onload = function() {
    if (xhr.status === 200) {
      // the request was successful
      console.log(xhr.responseText);
      // show a success message to the user
      const sentMessage = document.querySelector('.sent-message');
      sentMessage.style.display = 'block';
    } else {
      // there was an error
      console.error('Error:', xhr.statusText);
      // show an error message to the user
      const errorMessage = document.querySelector('.error-message');
      errorMessage.style.display = 'block';
    }
  };

  // handle any errors
  xhr.onerror = function() {
    console.error('Network Error');
    // show an error message to the user
    const errorMessage = document.querySelector('.error-message');
    errorMessage.style.display = 'block';
  };

  // send the request
  xhr.send(encodedData);
});