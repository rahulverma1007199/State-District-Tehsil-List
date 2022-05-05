const express = require("express");
const db = require("./database");
const app = express();
const cors = require("cors");
const { QueryTypes } = require("sequelize");
app.use(express.json());
app.use(cors());

app.get("/", async function (req, res) {
  const totalData = [];
  try {
    const state = await db.query("SELECT id,name FROM states ORDER BY id", {
      type: QueryTypes.SELECT,
    });
    for (var i = 0; i < state.length; i++) {
      const stateData = [];
      stateData.push({
        id:state[i].id,
        name:state[i].name,
      });
      let districtData = [];
      const districtQuery = await db.query(
        'SELECT * FROM districts WHERE state_id = "' + state[i].id + '"',
        { type: QueryTypes.SELECT }
      );
      for (var j = 0; j < districtQuery.length; j++) {
        
        
        const tehsilQuery = await db.query(
          'SELECT * FROM tahshil WHERE district_id = "' + districtQuery[j].id + '"',
          { type: QueryTypes.SELECT }
        );
        let tehsil = [];
        for(var k = 0 ; k < tehsilQuery.length ; k++){
          tehsil.push({
            id:tehsilQuery[k].id,
            name:tehsilQuery[k].tahshil
        });
        
        }
        districtData.push({
            id:districtQuery[j].id,
            name:districtQuery[j].district,
            tehsil : tehsil
        });
        stateData.forEach(function(districts){
          districts.District = districtData;
        });
      }
      
        totalData.push(
          stateData[0]
        );
    }
    res.status(200).send(totalData);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(3000, function () {
  console.log("Node app is running on port 3000");
});

module.exports = app;
