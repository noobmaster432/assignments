Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

```
setInterval(() => {
    const date = new Date();
    if (date.getHours() <= 12)
      console.log(
        `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} AM`
      );
    else 
      console.log(
        `${date.getHours() - 12}:${date.getMinutes()}:${date.getSeconds()} PM`
      );
}, 1000);
```