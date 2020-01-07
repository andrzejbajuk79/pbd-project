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
        TANK1_WYSOKOSC: parseFloat(data.Value),
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

router.get("/data2", (req, res, next) => {
  const results = [];

  fs.createReadStream("public/historian-calculated-data.csv")
    .pipe(csv({ separator: ";" }))
    .on("data", data => {
      const formattedData = {
        date: data.Date,
        TANK1_WYSOKOSC: parseFloat(data["PROJEKT.TANK1_WYSOKOSC.F_CV"]),
        TANKR_WYSOKOSC: parseFloat(data["PROJEKT.TANKR_WYSOKOSC.F_CV"]),
        SIM_VAR: parseFloat(data["SP3.Simulation00001"]) / 1000
      };
      results.push(formattedData);
    })
    .on("end", () => {
      res.json({
        success: true,
        data: results
      });
    })
    .on("error", err => {
      res.status(400).json(err || "Error");
    });
});

module.exports = router;
