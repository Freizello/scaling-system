// model define
const Url = require('../../models/urls')

exports.getIndex = (req, res) => {
  res.json({
    status: "success"
  })
}

exports.getAllUrl = (req, res) => {
  const query = Url.find({})
  query.exec((err, doc) => {
    if (err) {
      console.log(err)
    }

    if (!doc.length) {
      res.json({
        status: "success",
        urls: "url not found or empty"
      })
    } else {
      res.json({
        status: "success",
        urls : doc
      })      
    }
  })
}

exports.createUrl = (req, res) => {
  const url = new Url(req.body)
  // save to mongodb
  url.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      })
    }
    const shortUrl = `${req.get('host')}/${url.url_id}`
    res.status(200).json({
      message: 'url shortened successfully',
      short_url: shortUrl 
    })
  })
  // debug
  // console.log(`creatig new url : ${url}`)
}



// find({ name: 'john', age: { $gte: 18 }});
// exports.getUrl = (req, res) => {
//   const url = Url.find(
//     {original_url: {$eq: req.params.}
//   })
// }
