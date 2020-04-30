// model define
const Url = require('../../models/urls')

exports.getIndex = (req, res) => {
  res.json({
    status: "success",
    requestBody : req.get('host')
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
