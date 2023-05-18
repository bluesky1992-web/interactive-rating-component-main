// Get references to the necessary DOM elements
const submitButton = document.querySelector('#submit');
const ratingInputs = document.querySelectorAll('input[name="rating"]');
const finalScore = document.querySelector('.final-score');
const modal = document.querySelector('.modal');
const body = document.body;
const container = document.querySelector('.container')

// Hide the modal by default
modal.style.visibility = 'hidden';

// Add event listener to the submit button
submitButton.addEventListener('click', (e) => {
  // Get the value of the selected rating
   const selectedRating = document.querySelector('[name="rating"]:checked');

  // Check if a rating is selected
  if (!selectedRating) {
    e.preventDefault(); // Prevent form submission
    return;
  }
  
  container.style.display = 'none';
  // Show the modal
  modal.style.visibility = 'visible';
  
  // Display the selected rating in the modal
  finalScore.textContent = `You selected ${selectedRating.value} out of 5`;
  

});

// Add event listener to the window's click event

