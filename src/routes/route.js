const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

  const lodash =require('lodash')
  router.get('/test-me', function (req, res) {
    
  let months = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 const a=lodash.chunk(months,3)
console.log(a)

   res.send('My ist ever api!')
 });

// router.get('/movies/:indexNumber',function(req, res)  {
    // const movies=[" Rang de basanti ", " The shining ", " Lord of the rings ", " Batman begins "]
   // console.log(req.params, indexNumber)
     // res.send('dummy response')

// });






router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;