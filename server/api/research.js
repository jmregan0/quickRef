const research = require('express').Router();


research.get('/', function(req, res, next){

  const searchParams = req.body.searchParams;
  var query = '';

  searchParams.forEach((tag, index) => {
    var s = tag.split(' ');
    if (s.length > 1){
      s.forEach((word, index) => {
        query += word
        if(index < s.length - 1){
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

  // call to crossref API below


})


module.exports = research;
