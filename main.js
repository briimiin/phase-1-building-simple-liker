// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
  const heart = document.querySelector('.heart');
  const errorModal = document.getElementById('errorModal');

  heart.addEventListener('click', function() {
    mimicServerCall()
      .then(() => {
        // Handle success response
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');
        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch((error) => {
        // Handle error response
        errorModal.classList.remove('hidden');
        errorModal.querySelector('.error-message').textContent = error;
        setTimeout(function() {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
