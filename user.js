async function main() {
    const id = localStorage.getItem("id")
    const title = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=97a8a533&s=${title}`)
    const titleData = await title.json();

    console.log(titleData)
}

main();