var express = require('express');
var router = express.Router();
var history = require('../history');
var printer = require('../printer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/history', (req, res) => {
  console.log(history.processHistory);
  // get the json decode and print
  let textToPrint = req.body.history;
  //console.log('('----- Received history : ' + JSON.stringify(textToPrint)+ '\n');
  var sites = history.processHistory(textToPrint);
  console.log('----- Sites in router : ' + JSON.stringify(sites + '\n'));
  printer.printTicket(sites);
  
  res.sendStatus(200); 
  return;
});

module.exports = router;
