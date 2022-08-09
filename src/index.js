const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');


const lodash =require('lodash')
router.get('/test-me', function (req, res) {
  
let months = ['January', 'February', 'March', 'April', 'May',
'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const a=lodash.chunk(months,3)
console.log(a)

 res.send('My ist ever api!')
});


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
