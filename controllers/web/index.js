exports.getIndex = (req, res) => {
  res.send(`Welcome to ${process.env.APP_NAME || 'Shrinkrl'}`)
}