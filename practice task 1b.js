function delayedGreeting(name, dealyTime){
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        
    }, dealyTime);
}

delayedGreeting('Alice', 2000)