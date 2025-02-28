// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the button element
    const button = document.querySelector('button');
    
    // Create a new Audio object.
    const audio = new Audio('LunaSnowGoodBoy.mp3');
  
    // Add a click event listener to the button that plays the audio.
    button.addEventListener('click', function() {
      audio.play();
    });
  });
  