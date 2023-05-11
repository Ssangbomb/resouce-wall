const db = require('../connection');

const onePostWithIdAndComment = function(id) {
  return db
  .query('SELECT * FROM posts FULL JOIN comments ON posts.id = post_id WHERE posts.id = $1', [id])
  .then((data) => {
    return data.rows;
  });
};

module.exports = { onePostWithIdAndComment };
