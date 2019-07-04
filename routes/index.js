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
  console.log('received req.body : ' + JSON.stringify(req.body));
  let textToPrint = req.body.history;
  console.log('received history : ' + JSON.stringify(textToPrint));
  var sites = history.processHistory(textToPrint);
  console.log('sites in router : ' + JSON.stringify(sites));
  printer.printTicket(sites);
  res.sendStatus(200); 
  return;
});

module.exports = router;
