## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. (Hint: setTimeout)

```
var counter = 0;

function incrementCounter() {
    console.log(counter++);
    if(counter <= 100){
        setTimeout(incrementCounter, 1000);
    }
}

incrementCounter();
```