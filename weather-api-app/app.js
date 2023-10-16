const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Define the /api/v1/weather route
app.get('/api/v1/weather', (req, res) => {
  const weatherData = {
    Temp: 90.5,
    Unit: 'fahrenheit',
    Cloudy: false,
    PrecipitationChance: 0
  };

  res.json(weatherData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
