const express = require('express');
const abc = require('../introduction/intro')
const logger= require('../logger/logger.js')
const underscore=require ('underscore')
const router = express.Router();

   const lodash =require('lodash') 
    router.get('/test-me', function (req, res) {
    console.log( 'my batch name is' ,abc.name)
     abc.printName()
     loggerModule.prtintinfo()

      res.send('My ist ever api!')
  });


  module.exports = router;
