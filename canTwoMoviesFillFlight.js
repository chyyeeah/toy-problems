function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Determine if two movie runtimes add up to the flight length

  for (let i = 0; i < movieLengths.length; i++) {
    for (let j = i + 1; j < movieLengths.length; j++) {
      if (movieLengths[i] + movieLengths[j] === flightLength) return true;
    }
  }


  return false;
};

function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Determine if two movie runtimes add up to the flight length

  const cache = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    if (cache.has(flightLength - movieLengths[i])) return true;
    cache.add(movieLengths[i]);
  }

  return false;
};