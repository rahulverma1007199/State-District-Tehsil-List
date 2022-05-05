const router = require('express').Router();
const { QueryTypes } = require('sequelize');
const db = require("./database");

router.get('/states', async function (req,res){
    const typeQuery = req.query.type;
    const idQuery = req.query.id;
    const searchdb = req.query.search_db;
    const states =  idQuery ? await db.query(`select * from ${typeQuery} where ${searchdb} = ${idQuery} `,{type:QueryTypes.SELECT}) : await db.query(`select * from ${typeQuery}`,{type:QueryTypes.SELECT});
    try {
        console.log(states)
        res.status(200).json(states);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;
