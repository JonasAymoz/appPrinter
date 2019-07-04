var shell = require('shelljs');
var printer = require('./printer');

function processHistory(history){
    //get everysite put qtty
    console.log("Into process History");
    var sites = {} ;
    if(history){
        history.forEach(element => {
            let domain = extractHostname(element.url);
            if (!sites.hasOwnProperty(domain)){
                sites[domain] = element;
                console.log(domain +"\n");
            } else {
                sites[domain].visitCount = sites[domain].visitCount+1;
            }
        });
        console.log('Sites in processhistory : ' + JSON.stringify(sites));
        return sites;
    } 
}


// UTILS
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

module.exports = {processHistory};


