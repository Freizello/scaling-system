// model define
const Url = require('../../models/urls')

exports.getIndex = (req, res) => {
  res.send(`Welcome to ${process.env.APP_NAME || 'Shrinkrl'}`)
}

exports.getFullUrl = (req, res) => {
  
  const query = Url.findOne({url_id : req.params.urlId})  
  query.exec((err, doc) => {
    if (err) {
      return res.end(err.message)
    }
    
    if (!doc) {
      res.send('404 : URL not found')
    } else {
      res.redirect(doc.original_url)
    }
  })
}
  // const query = Url.find({ url_id: { $eq: req.params.urlId }})
  // const doc = query.exec().then
  // // console.log(query)
  // console.log(doc)
  // console.log(req.params.urlId)

  // query.exec().then((res) => {
  //   console.log(query.original_url)
  //   res.redirect(doc.original_url)
  // }).catch((err) => {
  //   res.send('404 : URL not found')
  // })


  // Url.find({}).exec(function(err, models) {
  //   if (err) {
  //       res.render('error', {
  //           status: 500
  //       });
  //   } else {
  //       res.json(models);
  //   }
  // });


  // const query = Url.findOne( { url_id: req.params.urlId } )
  // query.exec().then((res, doc) => {
  //   // handle success
  //   // console.log('success ' + query._id)
  //   res.redirect(doc.original_url)
  // }).catch(function (err) {
  //   // handle error
  //   console.log('error')
  //   // res.redirect(req.get('host'))
  // });