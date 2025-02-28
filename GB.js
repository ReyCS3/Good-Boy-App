// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the button element
    const button = document.querySelector('button');
    
    // Create a new Audio object.
    // Replace 'path/to/your/audio.mp3' with the actual file path or URL of your audio file.
    const audio = new Audio('LunaSnowGoodBoy.mp3');
  
    // Add a click event listener to the button that plays the audio.
    button.addEventListener('click', function() {
      audio.play();
    });
  });
  