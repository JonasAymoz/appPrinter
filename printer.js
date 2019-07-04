var shell = require('shelljs');


function printText(text){
    dir = shell.exec('python booth.py "'+text+'" ', function(code, stdout, stderr) {
        if (code) {
            console.log('Program output:', stdout);
            console.log('Program stderr:', stderr);
        }        
    }); 
}

function initTicket(){
    dir = shell.exec('python -c "import booth; booth.initTicket()"', function(code, stdout, stderr) {
        if (code) {
          console.log('Program output:', stdout);
          console.log('Program stderr:', stderr);
        }
    });
}

function footerTicket(){
    dir = shell.exec('python -c "import booth; booth.footerTicket()"', function(code, stdout, stderr) {
        if (code) {
          console.log('Program output:', stdout);
          console.log('Program stderr:', stderr);
        }
    });
}


function printTicket(data){
    initTicket();
    for (const [url, object] of Object.entries(data)) {
        printText(url + '  *' + object.visitCount + '\n');
        console.log(url, object.visitCount);
    }
    printText('\n');
    footerTicket();
}

module.exports = {printTicket, printText};