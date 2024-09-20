#!/usr/bin/node

const request = require('request');
const args = process.argv;
const movieUrl = 'https://swapi-api.alx-tools.com/api/films/' + args[2];

/**
 * Wrapper function for request object that allows it
 * to work with async and await
 * @param   {String} url - site url
 * @returns {Promise}    - promise object that resolves
 *                         with parsed JSON response
 *                         and rejects with the request error.
 */
function sendRequest (url) {
    return new Promise((resolve, reject) => {
      request.get(url, (error, response, body) => {
        if (error) reject(error);
        else resolve(JSON.parse(body));
      });
    });
  }
  
/**
 * Entry point - retrieves movie character info from Star Wars API
 * based on the movie ID passed as a CLI parameter.
 * Prints the names of the characters in the order of appearance.
 */
  async function main () {
    if (args.length < 3) return;

    const movie = await sendRequest(movieUrl);
    if (movie.characters === undefined) return;
    for (const characterUrl of movie.characters) {
      const character = await sendRequest(characterUrl);
      console.log(character.name);
    }
  }
  
  main();