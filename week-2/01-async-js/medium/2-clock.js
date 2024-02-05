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