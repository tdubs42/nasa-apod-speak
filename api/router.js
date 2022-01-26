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

// this endpoint reads NASA APOD API and creates entry in db if date does not
// already exist
router.post("/check-today", fetchPhoto, (req, res, next) => {
  db.savePhoto(res.locals.photo)
    .then(photo => res.status(201).json(photo))
    .catch(next);
});

// create user with email
router.post("/add-user", (req, res, next) => {
  db.addUser(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
});

// delete user with email
router.delete("/delete-user", (req, res, next) => {
  const deletedUser = req.body;

  db.deleteUser(deletedUser)
    .catch(next);

  return res.json(deletedUser);
});

module.exports = router;