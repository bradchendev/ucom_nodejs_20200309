"use strict";
var fs = require('fs')

// fs.open('data\\info.txt', 'r', (error, handle) => {
fs.open('data\\info2.txt', 'r', (error, handle) => {
    if (error){
        return console.log(error)
    }
    console.log("file open successful, continue")
 });