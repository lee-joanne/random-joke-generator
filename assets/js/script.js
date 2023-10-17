let jokeText = document.getElementById("joke-text");
let btn = document.getElementById("joke-btn");

btn.addEventListener("click", async () => {
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");
        const responseText = await response.text();
        const jokeData = JSON.parse(responseText);
        const joke = jokeData.joke
        jokeText.innerHTML = joke;
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
});