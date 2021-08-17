const db = require('../../db/index.js');

//GET /reviews/

const getReviews = (req, res) => {
   const product_id= req.query.product_id || 4;
   const page = req.query.page || 1;
   const count = req.query.count || 5;
   const sort = req.query.sort ? `ORDER BY ${req.query.sort}DESC` : `ORDER BY date DESC`;
   const startIndex = (page - 1) * count;
   const endIndex = page * count;


  const getData = async () => {
    const result = db.query(
      `SELECT reviews.id AS review_id,rating,summary,recommend,response,body,to_timestamp(date/1000)::date AS date,reviewer_name,helpfulness,reported,COUNT(url),json_build_object('url', array_agg(url)) AS photos
      FROM reviews
        LEFT JOIN reviews_photos ON reviews.id=reviews_photos.review_id
      WHERE product_id=${product_id} AND reported=false
      GROUP BY 1
      ${sort}`
   )
   const reviews = await Promise.all([result]);
   return reviews;

  }

  getData()
  .then(result => {

    result[0][0].forEach(eachReview => {

      const urls = eachReview.photos.url;
      eachReview.photos = [];
     urls.forEach((eachPhoto,index) => {
       if(eachPhoto) {
         eachReview.photos.push({id: index, url: eachPhoto})
       }
    })
    })

    const sendBack = { product: product_id, page: page, count:count, result: result[0][0].slice(startIndex, endIndex)}
    res.send(sendBack);
  })
  .catch(err => console.log(err))

};


//GET /reviews/meta

const getMeta = (req, res) => {
  const product_id= req.query.product_id || 4;

 const getMetaData = async () => {
   const ratings = db.query(
    `SELECT json_build_object(recommend, COALESCE(sum(CASE WHEN recommend THEN 1 ELSE 0 END),0)) AS recommend,json_build_object(not recommend,COALESCE(sum(CASE WHEN recommend THEN 0 ELSE 1 END),0))AS notRecommend,json_build_object(rating, count(rating)) AS ratings
    FROM reviews
    WHERE product_id=${product_id} AND reported=false
    GROUP BY rating, recommend`)

    const characteristics = db.query(
      `SELECT AVG(value)::numeric(10,4)AS value,name FROM characteristics Full JOIN characteristic_reviews
          ON characteristic_reviews.characteristic_id=characteristics.id
          WHERE product_id=${product_id}
          GROUP BY name`
    )
  const reviews = await Promise.all([ratings,characteristics]);
  return reviews;

 }

 getMetaData()
 .then(result => {
   let ratings = {};
   let recommended = { 0: 0, 1: 0};
   let sendBack = {product_id: product_id.toString(), ratings: {}, recommended: recommended}
     result[0][0].forEach(eachRating => {
     ratings = {...ratings,...eachRating.ratings};
     if (eachRating.recommend.true) {
       sendBack.recommended[1]++;
     }
     if (eachRating.notrecommend.false) {
      sendBack.recommended[0]++;
    }
   });
   sendBack.ratings = ratings;

   let characteristics = {};
   result[1][0].forEach((eachCharacteristic, index) => {
      let char = {
        [eachCharacteristic.name]: {
          id: index,
          value: eachCharacteristic.value
        }
      }
      characteristics = {...characteristics, ...char}
   })

   sendBack.characteristics = characteristics;
   res.send(sendBack);
 })
 .catch(err => console.log(err))

};



// POST /reviews
  const addReview = (req, res) => {
    const date = new Date().getTime().toString();
    const product_id= req.body.product_id || 1;
    const rating = req.body.rating;
    const body = req.body.body;
    const recommend = req.body.recommend;
    const name = req.body.name;
    const email = req.body.email;
    const photos = req.body.photos || [];
    const characteristics = req.body.characteristics || {};


    const toReviews = db.query(
      `INSERT INTO reviews (product_id,rating,summary,body,recommend,reviewer_name,reviewer_email) VALUES(1,5,'abc','efg',true,'gUnit','abc@gmail.com') RETURNING id;`
    )
    .then((result) => {
      console.log(result[0][0].id);
      const review_id = result[0][0].id;

      if(photos.length > 0){
        photos.forEach(url => {
          const toPhotos = db.query(
            `INSERT INTO reviews_photos (review_id,url) VALUES(${review_id}, url)`
          )
        })

      }
    })
  }



//PUT /reviews/:review_id/helpful
const markReviewHelpful = (req, res) => {
  db.query(
    `UPDATE reviews
     SET helpfulness = helpfulness + 1
     WHERE id=${req.params.review_id};
    `
  ).then(result => {
    res.send('CREATED');
    res.status(201);
  })
}



//PUT /reviews/:review_id/report
const reportReview = (req, res) => {
  db.query(
    `UPDATE reviews
     SET reported = true
     WHERE id=${req.params.review_id};
    `
  ).then(result => {

    res.sendStatus(201);
  })
}

module.exports = {
  getReviews,
  getMeta,
  addReview,
  markReviewHelpful,
  reportReview
}