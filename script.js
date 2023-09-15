const videoGames = require('./load-games.js');

// recomendacion juegos aleatorios para una consola
function recommendGamesForConsole(consoleName, count = 2) {
  const consoleGames = videoGames[consoleName];
  if (!consoleGames || consoleGames.length === 0) {
    return 'No se encontraron juegos para esta consola en nuestra base de datos';
  }

  const recomendation = [];
  while (recomendation.length < count && consoleGames.length > 0) {
    const randomIndex = Math.floor(Math.random() * consoleGames.length);
    const game = consoleGames.splice(randomIndex, 1)[0];
    recomendation.push(`${game.name} - ${game.video_console} - ${game.genres.join(', ')}`);
  }

  return recomendation;
}

function recommendGamesForGenre(genre, count = 3) {
  const genreGames = [];

  for (const consoleName in videoGames) {
    if (videoGames.hasOwnProperty(consoleName)) {
      const games = videoGames[consoleName].filter(function (game) {
        return game.genres.includes(genre);
      });
      for (let i = 0; i < games.length; i++) {
        genreGames.push(games[i]);
      }
    }
  }

  if (genreGames.length === 0) {
    return 'No se encontraron juegos para este género en nuestra base de datos';
  }

  const recomendation = [];
  while (recomendation.length < count && genreGames.length > 0) {
    const randomIndex = Math.floor(Math.random() * genreGames.length);
    const game = genreGames.splice(randomIndex, 1)[0];
    recomendation.push(`${game.name} - ${game.video_console} - ${game.genres.join(', ')}`);
  }

  return recomendation;
}


//  juego aleatorio para por consola y genero género específico
function recommendGameForConsoleAndGenre(consoleName, genre) {
  const consoleGenreGames = videoGames[consoleName].filter(game => game.genres.includes(genre));
  if (consoleGenreGames.length === 0) {
    return 'No se encontraron juegos para esta consola y género en nuestra base de datos';
  }

  const randomIndex = Math.floor(Math.random() * consoleGenreGames.length);
  const game = consoleGenreGames[randomIndex];
  return [`${game.video_console} - ${game.genres.join(', ')} - ${game.name}`];
}




//funcion devolver por genero

function filtredGamesForGenre(genre, count=30) {
  const genreGames = [];

  for (const consoleName in videoGames) {
    if (videoGames.hasOwnProperty(consoleName)) {
      const games = videoGames[consoleName].filter(function (game) {
        return game.genres.includes(genre);
      });
      for (let i = 0; i < games.length; i++) {
        genreGames.push(games[i]);
      }
    }
  }

  if (genreGames.length === 0) {
    return 'No se encontraron juegos para este género en nuestra base de datos';
  }

  const recomendation = [];
  while (recomendation.length < count && genreGames.length > 0) {
    const randomIndex = Math.floor(Math.random() * genreGames.length);
    const game = genreGames.splice(randomIndex, 1)[0];
   
      recomendation.push(`${game.name} - ${game.video_console} - ${game.genres.join(', ')}`);
    if (condition) {
      
    }
    

    
  }

  return recomendation;
}

// Ejemplos de uso
console.log('Recomendación de juegos para una consola:');
console.log(recommendGamesForConsole('GBA'));

console.log('\nRecomendación de juegos para un género:');
console.log(recommendGamesForGenre('RPG'));

console.log('\nRecomendación de juego para una consola y género específico:');
console.log(recommendGameForConsoleAndGenre('GBA', 'RPG'));

console.log('\nFiltrado por género:');
console.log(filtredGamesForGenre('RPG'));