const db = require('../../db/index.js');
var Sequelize = require('sequelize');
const reviews = require('../../db/models/reviews');
const models = require('../../db/models');
const Op = models.Sequelize.Op;

const getReviews = async (req, res) => {
   let page = req.query.page;
   let count = req.query.count;


  const dbResult = await db.query(
  //  `SELECT product_id,id AS review_id,rating,summary,recommend,response,body,date,reviewer_name,helpfulness FROM reviews LIMIT ${count}`



  //making url array
  `SELECT ARRAY(
    SELECT url
    FROM reviews_photos
    WHERE review_id=5)`
  // 'SELECT product_id,characteristicsFROM characteristics INNER JOIN characteristic_reviews ON characteristics.id=characteristic_reviews.characteristic_id LIMIT 100'

  ).then(

    result => res.send(result)
  )
  .catch(err => console.log(err));

}

module.exports = {
  getReviews
}