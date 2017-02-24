'use strict';
var fs = require('fs');
var split = require('split');


// create a model from csv file

var i=0;
var model={};
var k =0;

var modelPath = '/files/xyz_model.csv';

 fs.createReadStream(__dirname + modelPath)
     .pipe(split())
     .on('data', function (line) {
              console.log("Line " +i + " :"+ line);
              if(i>0){
                model[k]=line.split(",");
                 console.log("model is "+model[k]);
                k++;
              }
              i++;
     })
     .on('end',function(){
         console.log("model on end is "+model[0][0]);
          console.log("model on end is "+model[0][1]);
     })
     .on('error',function(err){
            console.log("Error reading the model  file"+err);
     });


//using streams build a data set object

var dataSet={};
var dataPath = '/files/xyz.csv';

var k1=0;
var i1=0;


fs.createReadStream(__dirname + dataPath)
     .pipe(split())
     .on('data', function (line2) {
//console.log("Line " +i + " :"+ line);
              if(i1>0){
                  console.log("k is"+ k);
                 dataSet[k1]=line2.split(",");
              //   console.log("dataSet is "+ dataSet[k]);
                 k1++;
              }
              i1++;
     })
     .on('end',function(){
         console.log("dataSet on  end is[0] "+dataSet[0][0]);
     })
     .on('error',function(err){
            console.log("Error reading the data file"+err);
     });