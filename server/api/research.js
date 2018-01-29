const research = require('express').Router();
const axios = require('axios');
const userId = require('../../keys').userId


research.post('/', function(req, res, next){

console.log('req.body', req.body)
let searchParams = req.body.tags;

var query = '';

  searchParams.forEach((tag, index) => {
    var s = tag.text.split(' ');
    if (s.length > 1){
      s.forEach((word, index) => {
        query += word
        if (index < s.length - 1){
          query += '%20'
        }
      })
    } else {
      query += tag.text
    }
    if (index < searchParams.length - 1){
      query += '+'
    }
  })

  axios({
    method: 'get',
    url: `https://api.crossref.org/works?query=${query}&rows=100`,
    headers: {
      'User-Agent': `${userId}`
    }
  })
  .then(info => {
    // console.log('info', info.data)
    res.send(info.data.message.items).status(200)
  })
  .catch(err => console.error(err))

})


module.exports = research;
