function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json',
            'User-Agent': 'My Awesome Dad Joke App (https://github.com/markhillard/icanhazdadjoke)'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.joke);
        document.getElementById("jokeElement").innerHTML = data.joke;
    })
    .catch(error => console.error(error));
}