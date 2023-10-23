const express = require('express');
const router = express.Router();

let birdsData = []; // Array to store bird data

// Route for rendering the create bird form
router.get('/birds/create', (req, res) => {
  res.render('createBirdForm', { title: 'Create Bird' });
});

// Route for handling the form submission
router.post('/birds/create', (req, res) => {
  const { species, nickname, status } = req.body;
  const bird = { species, nickname, status };
  birdsData.push(bird);
  res.redirect('/birds/created'); // Redirect to the confirmation page
});

// Route for displaying the confirmation page with the list of created birds
router.get('/birds/created', (req, res) => {
  res.render('birdCreated', { birds: birdsData, title: 'Birds Created' });
});

module.exports = router;
// ... (Previous code remains the same)

// Modify the route for handling the form submission
router.post('/birds/create', (req, res) => {
  const { species, nickname, status } = req.body;
  const bird = { species, nickname, status };
  birdsData.push(bird);
  res.redirect(`/birds/created?message=Bird created: Species - ${species}, Nickname - ${nickname}, Status - ${status}`);
});

// Modify the route for displaying the confirmation page with the list of created birds
router.get('/birds/created', (req, res) => {
  res.render('birdCreated', { birds: birdsData, title: 'Birds Created' });
});
