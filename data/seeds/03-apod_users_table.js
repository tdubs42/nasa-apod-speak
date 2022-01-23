const users = [
  {apod_user_id: 0, apod_user_email: 'tdubs@duck.com'},
  {apod_user_id: 1, apod_user_email: 'contact-tdubs@pm.me'},
  {apod_user_id: 2, apod_user_email: 'contact-tdubs@protonmail.com'},
]

exports.seed = function(knex) {
  return knex('apod_users').insert(users)
};
