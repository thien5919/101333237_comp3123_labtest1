//Question 3

const fs = require('fs');
const path = require('path');

const addLogs= () => {
    
const dir = path.join(__dirname, 'Logs');

// Create Logs directory if it doesn't exist
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log('Logs directory created.');
} else {
    console.log('Logs directory already exists.');
}

// Change current process to the Logs directory
process.chdir(dir);

// Create 10 log files and write some text to each file
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    const fileContent = `Hello World!!!\nThis is the content of ${fileName}`;
    
    
    fs.writeFile(fileName, fileContent, (err) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log(`Created file: ${fileName}`);
        }
    });   
}
};

addLogs();

