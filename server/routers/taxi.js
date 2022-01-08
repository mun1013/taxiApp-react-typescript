const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 *@route GET /taxi 
 *@desc GET taxi based on parameter lat, lng and count 
*/
router.get('/taxi/:latitude/:longitude/:count', (req, res) => {
  const latitude = req.params.latitude;
  const longitude = req.params.longitude;
  const count = req.params.count;

  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180)
    return;

  const url = 'https://qa-interview-test.splytech.dev/api/drivers';

  axios.get(url, {
    params: { latitude, longitude, count }
  })
    .then((response) => {
      res.status(200).send(response.data.drivers);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;
