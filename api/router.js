const router = require("express").Router();
const db = require("./model.js");
const {fetchPhoto} = require("./middleware.js");

router.get("/", (req, res, next) => {
  db.getAllPhotos()
    .then(photo => res.json(photo))
    .catch(next);
});

router.get("/today", (req, res, next) => {
  db.currentDay()
    .then(photo => res.json(photo))
    .catch(next);
});

router.post("/check-today", fetchPhoto, (req, res, next) => {
  console.log(res.locals.photo);
  db.savePhoto(res.locals.photo)
    .then(photo => res.status(201).json(photo))
    .catch(next);
});

module.exports = router;