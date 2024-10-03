//Question 3

const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'Logs');
//check if Logs directory exists
if (fs.existsSync(dir)) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(err);
        }
        
            files.forEach(file => {
                const filePath = path.join(dir, file);
                fs.unlink(filePath, err => {
                    if (err) {
                        console.error(err);
                    }
                    else {
                        //output deleted files
                        console.log(`Deleted file: ${filePath}`);
                    }
                });
            });
            //remove Logs directory
            fs.rm(dir,{recursive:true}, err => {
                if (err) {
                    console.error(err);
                }
                else {
                    console.log('Logs directory deleted.');
                }
            });        
    });
}else{
    console.log('Logs directory does not exist.');
}