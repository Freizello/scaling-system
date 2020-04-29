exports.getIndex = (req, res) => {
    res.json({
      status: "success",
      requestBody : req.body
    })
  }