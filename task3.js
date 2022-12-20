import csv from "csvtojson";
import fs from "fs";
const readStream = fs.createReadStream('./task1.csv');
const writeText = fs.createWriteStream('./task3.text');
//readStream.pipe(csv()).pipe(writeText);
readStream.pipe(csv())
  .on('data', (data) => {
    //console.log(data.toString('utf8'))
    writeText.write(data)
  })
  .on('error', (err) => {
    console.log(err)
  });