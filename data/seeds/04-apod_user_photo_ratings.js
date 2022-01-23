const ratings = [
  {
    apod_user_id: 0,
    apod_photo_id: 0,
    apod_user_photo_rating: 4
  },
  {
    apod_user_id: 0,
    apod_photo_id: 1,
    apod_user_photo_rating: 1
  },
  {
    apod_user_id: 1,
    apod_photo_id: 0,
    apod_user_photo_rating: 2
  },
  {
    apod_user_id: 1,
    apod_photo_id: 4,
    apod_user_photo_rating: 4
  },
  {
    apod_user_id: 2,
    apod_photo_id: 0,
    apod_user_photo_rating: 5
  },
  {
    apod_user_id: 2,
    apod_photo_id: 3,
    apod_user_photo_rating: 3
  }
]

exports.seed = function(knex) {
  return knex('apod_user_photo_ratings').insert(ratings)
};
