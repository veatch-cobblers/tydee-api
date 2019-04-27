const express = require('express');
let router = express.Router();

router.get("/", async function (req, res) {
    res.send("this is complete trash")
});


module.exports = router;