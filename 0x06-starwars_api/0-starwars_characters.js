#!/usr/bin/node

const request = require('request');
const arg = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${arg}`;

request(url, async (err, response, body) => {
  if (err) {
    console.log(err);
  }
  let characters = JSON.parse(body).characters
  for (const characterId of characters) {
    await new Promise((resolve, reject) => {
      request(characterId, (err, response, body) => {
        if (err) {
          reject(err);
        }
        console.log(JSON.parse(body).name);
        resolve();
      });
    });
  }
});