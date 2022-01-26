const fetch = require("node-fetch");
const db = require("./model.js");
// TODO for v2 add yup validation middleware for user creation to confirm valid
//  email

const fetchPhoto = async (req, res, next) => {
  await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.APOD_API_KEY}`)
    .then(photo => photo.json())
    .then(photo => {
      const hammeredOutData = {
        apod_photo_copyright: photo.copyright ? photo.copyright : null,
        apod_photo_explanation: photo.explanation,
        apod_photo_src: photo.hdurl,
        apod_photo_media_type: photo.media_type,
        apod_photo_title: photo.title,
        apod_photo_date_posted: photo.date
      }
      res.locals.photo = hammeredOutData
      next()
    });
};

module.exports = {
  fetchPhoto
};