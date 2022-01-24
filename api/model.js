const db = require("../data/db-config.js");

const getAllPhotos = () => db("apod_photos")

const currentDay = () => {
  const today = new Date().toISOString().slice(0, 10);

  return db("apod_photos")
    .select("*")
    .where("apod_photo_date_posted", today);
};

const savePhoto = async photo => {
  const [newPhoto] = await db("apod_photos")
    .returning(["apod_photo_copyright", "apod_photo_date_posted",
      "apod_photo_explanation", "apod_photo_src",
      "apod_photo_media_type", "apod_photo_title"])
    .insert(photo);

  return newPhoto;
};

module.exports = {
  getAllPhotos,
  currentDay,
  savePhoto
};