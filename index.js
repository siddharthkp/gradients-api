const { parse } = require('url')
const gradients = require('./gradients')

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const { name } = parse(req.url, true).query
  return (
    gradients.filter(g => g.name.replace(/ /g, '') == name)[0] ||
    `I don't that one!`
  )
}
