// https://www.omdbapi.com/?i=tt3896198&apikey=97a8a533&s=${title}

async function main() {
    const movieTitle = await fetch(`https://omdbapi.com/`);
    const movieTitleData = await movieTitle.json();
    console.log(movieTitleData);
}

main();