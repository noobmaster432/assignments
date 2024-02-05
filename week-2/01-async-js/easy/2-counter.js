var counter = 0;

function incrementCounter() {
    console.log(counter++);
    if(counter <= 100){
        setTimeout(incrementCounter, 1000);
    }
}

incrementCounter();