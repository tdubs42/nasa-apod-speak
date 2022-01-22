exports.up = async knex => {
  await knex.schema
            .createTable("apod_photos", apodPhotos => {
              apodPhotos.increments("apod_photo_id");
              apodPhotos.string("apod_photo_copyright");
              apodPhotos.string("apod_photo_explanation").notNullable().unique();
              apodPhotos.date("apod_photo_date_posted").notNullable().unique();
              apodPhotos.string("apod_photo_media_type").notNullable();
              apodPhotos.string("apod_photo_src").notNullable().unique();
              apodPhotos.string("apod_photo_title").notNullable().unique();
            })
            .createTable("apod_users", apodUsers => {
              apodUsers.increments("apod_user_id");
              apodUsers.string("apod_user_email").notNullable().unique();
            })
            .createTable("apod_user_photo_ratings", apodUserPhotoRatings => {
              apodUserPhotoRatings.integer("apod_user_id")
                                  .references("apod_user_id")
                                  .inTable("apod_users");
              apodUserPhotoRatings.integer("apod_photo_id")
                                  .references("apod_photo_id")
                                  .inTable("apod_photos");
              apodUserPhotoRatings.integer("apod_user_photo_rating")
                                  .notNullable();
            });
};

exports.down = async knex => {
  await knex.schema
            .dropTableIfExists("apod_user_photo_ratings")
            .dropTableIfExists("apod_users")
            .dropTableIfExists("apod_photos");
};
