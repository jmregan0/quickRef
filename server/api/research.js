const research = require('express').Router();
const axios = require('axios');


research.post('/', function(req, res, next){

  let searchParams = req.body.searchParams.split(' ');

  console.log('searchParams', searchParams)

  var query = '';

  searchParams.forEach((tag, index) => {
    var s = tag.split(' ');
    if (s.length > 1){
      s.forEach((word, index) => {
        query += word
        if (index < s.length - 1){
          query += '%20'
        }
      })
    } else {
      query += tag
    }
    if (index < searchParams.length - 1){
      query += '+'
    }
  })

  axios({
    method: 'get',
    url: `https://api.crossref.org/works?query=${query}`,
    headers: {
      'User-Agent': 'quickref01@gmail.com'
    }
  })
  .then(info => {
    // console.log('info', info.data)
    res.send(info.data.message.items).status(200)
  })
  .catch(err => console.error(err))

})


module.exports = research;