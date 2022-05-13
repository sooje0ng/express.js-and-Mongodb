const express = require("express");
const BookSchema = require("../models/book");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("post"); //post.ejs 파일을 render해라
});
router.post("/", (req, res, next) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const date = req.body.date;
    res.json({ name: name, phone: phone, date: date });
    //response 응답.
    //웹 통신 방식은 1요청 1응답임.
    // next();
});
router.post("/addbook", (req, res) => {
    const bookname = req.body.bookname;
    const author = req.body.author;
    const price = req.body.price;
    const date = req.body.date;

    let bookData = new BookSchema({
        bookname: bookname,
        author: author,
        price: price,
        publish: date,
    });

    bookData.save();
    res.redirect("/expost");
});

// router.post("/", (req, res) => {
//     //res.redirect ==> 호출한 경로로 재접근.
//     res.redirect("expost");
// });
module.exports = router;
