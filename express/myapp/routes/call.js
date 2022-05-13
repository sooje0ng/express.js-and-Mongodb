const express = require("express");
const { route } = require(".");
const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("test express");
    res.send("hello express");
    next(); //현재 미들웨어의 기능을 마치고, 다음 미들웨어로 연결을 해준다. 그냥 호출하기만 하면 됨.
});

router.get("/", (req, res, next) => {
    console.log("2nd express");
});

module.exports = router; //==>app.js로 보냄
