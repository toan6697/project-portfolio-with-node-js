var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/chi-tiet-sp-:id", function(req, res, next) {
  if (!req.session.idspdaxem) {
    req.session.idspdaxem = [];
  }
  if(req.session.idspdaxem.indexOf(req.params.id) == -1){
    req.session.idspdaxem.push(req.params.id);
  } 
  res.render("chi-tiet-sp", { title: "CHi tiet sp", idsp: req.params.id });
});

router.get("/danh-sach-sp-da-xem", function(req, res, next) {
  res.render('sp-da-xem', {title: "Danh sach sp da xem", productIds: req.session.idspdaxem});
});
module.exports = router;
