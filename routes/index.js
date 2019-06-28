var express = require('express');
var router = express.Router();
var history = require('../history');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  console.log(history.processHistory);
  //res.send(req.body); 
  res.send('Received a POST HTTP method');
  // get the json decode and print
  let textToPrint = req.body.data;
  history.printText(textToPrint);
  console.log(`jeez i receiveid that: ${textToPrint}`);
  return 
  //return history.processHistory(jsonHistory);


});

module.exports = router;
