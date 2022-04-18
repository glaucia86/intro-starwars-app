/**
 * File: app.js
 * Description: File responsible for running the application
 * Data: 05/04/2022
 * Author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */


const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('App - Star Wars Intro');
});

app.listen(3000, () => console.log('Application is running on port 3000!'));
