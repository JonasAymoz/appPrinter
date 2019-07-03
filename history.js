var shell = require('shelljs');

function processHistory(history){
    //get everysite put qtty
    console.log("yo");
    var sites = {} ;
    if(history){
        history.forEach(element => {
            let domain = extractHostname(element.url);
            if (!sites.hasOwnProperty(domain)){
                sites[domain] = element;
                //console.log(domain +"\n");
            } else {
                sites[domain].visitCount =+1;
            }
        });
        for (element in sites) {
            console.log(element +' '+ sites[element].visitCount);
        };
    }
    
}


function printText(text){
    dir = shell.exec('python printer.py "'+text+'" ', function(code, stdout, stderr) {
        if (code) {
          // should have err.code here?  
        }
        console.log('Exit code:', code);
        console.log('Program output:', stdout);
        console.log('Program stderr:', stderr);
    });
}


function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

module.exports = {processHistory, printText};