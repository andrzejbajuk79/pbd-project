const express = require("express");
const csv = require("csv-parser");
const fs = require("fs");

const router = express.Router();

router.get("/data", (req, res, next) => {
  const results = [];

  fs.createReadStream("public/historian-data.csv")
    .pipe(csv({ separator: ";" }))
    .on("data", data => {
      const formattedData = {
        date: data.Timestamp,
        value: parseFloat(data.Value),
        quality: data.Quality
      };
      results.push(formattedData);
    })
    .on("end", () => {
      res.json({
        success: true,
        projectName: "PROJEKT.TANK1_WYSOKOSC.F_CV",
        data: results
      });
    })
    .on("error", err => {
      res.status(400).json(err || "Error");
    });
});

module.exports = router;
