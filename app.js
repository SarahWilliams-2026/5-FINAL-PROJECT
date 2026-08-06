async function fetchMovieData() {
  const apiKey = '97a8a533';
  // Example using OMDb API format (?apikey=KEY&t=MOVIE_TITLE)
  const url = `https://omdbapi.com{apiKey}&t=inception`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const movie = await response.json();
    console.log('Movie Title:', movie.Title);
    console.log('Year:', movie.Year);
    console.log('Genre:', movie.Genre);
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
}

fetchMovieData();

   