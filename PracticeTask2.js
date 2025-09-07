function tellJoke() {
    console.log("Why don't scientists trust atom? Because they make up everything!");
}

const jokeInterval = setInterval(tellJoke, 2000)

// After 10 seconds, stop telling jokes
setTimeout(() => {
    clearInterval(jokeInterval);
    console.log('No more jokes');

}, 10000)