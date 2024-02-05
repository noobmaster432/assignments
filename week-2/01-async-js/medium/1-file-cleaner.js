const fs = require('fs');

// Read the file
fs.readFile('demo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Remove extra spaces
    const cleanedData = data.replace(/\s+/g, ' ');

    // Write the cleaned data back to the file
    fs.writeFile('demo.txt', cleanedData, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('File successfully cleaned!');
    });
});

