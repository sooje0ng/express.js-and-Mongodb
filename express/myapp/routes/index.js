var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
    //DB의 검색 내용, 데이터 내용들을 전달하기 용이.
    //보안적으로도 클라이언트 사이드보다 유용
});

module.exports = router;
