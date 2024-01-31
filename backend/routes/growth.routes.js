const express = require('express');
const router = express.Router();
const fs = require('fs');
const csv = require('csv-parser');

const dataPath = './db/dataset.csv';
const downsamplingFactor = 10; 

router.get('/chart', (req, res) => {
  const { interval } = req.query;  
  const chartData = [];
  let currentIndex = 0;

  fs.createReadStream(dataPath)
    .pipe(csv())
    .on('data', (row) => {
        // console.log(row)
      if (currentIndex % downsamplingFactor === 0) {
        // Only include every nth data point (downsampling)

        const timestamp = new Date(row.Timestamp);
        const isWithinInterval = checkInterval(timestamp, interval);
        if (isWithinInterval) {
          chartData.push({
            Timestamp: getFormattedTimestamp(timestamp, interval),
            Percentage: parseFloat(row['Profit Percentage']),
          });
        }
      }
      currentIndex++;
    })
    .on('end', () => {
      res.status(200).json({message:'data found',  count:chartData.length,data:chartData});
    })
    .on('error', (error) => {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    });
});

function checkInterval(timestamp, interval) {
  switch (interval) {
    case 'monthly':
      return timestamp.getDate() === 1; 
    case 'yearly':
      return timestamp.getMonth() === 0 && timestamp.getDate() === 1; 
    case 'weekly':
     
      return true; 
    default:
      return true; 
  }
}


function getFormattedTimestamp(timestamp, interval) {
  switch (interval) {
    case 'monthly':
      return timestamp.toLocaleString('en-us', { month: 'long' }).slice(0, 3);
    case 'yearly':
      return timestamp.getFullYear().toString();
    case 'weekly':
      return timestamp.toLocaleString('en-us', { weekday: 'long' }).slice(0, 3);
    default:
      return timestamp.toISOString();
  }
}

module.exports = router;
