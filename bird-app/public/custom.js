$(document).ready(function() {
    $('#addBird').click(function() {
      // Clone the last bird entry
      const clonedBird = $('.bird-entry:last').clone();
      
      // Clear the input values in the cloned bird entry
      clonedBird.find('input').val('');
      
      // Append the cloned bird entry to the form
      $('#birdForm').append(clonedBird);
    });
  });
  