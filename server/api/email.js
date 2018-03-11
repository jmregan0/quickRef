const email = require('express').Router();
const sendFrom = process.env.userId

const publicKey = process.env.mailjetPublicKey;
const privateKey = process.env.mailjetPrivateKey;

const mailjet = require('node-mailjet').connect(publicKey, privateKey)

email.post('/', function(req, res, next){

  const sendTo = req.body.sendTo;
  let research = req.body.research.map(item => {
    return (
      `<div><h3>${item.title}</h3><p>Link: ${item.URL}</p></div>`
    )
  })
  let emailHTML = ''
  research.forEach(item => { emailHTML += item })

  console.log('sendTo ---->', sendTo)
  console.log('sendFrom ---->', sendFrom)

  const request = mailjet
  .post('send', {version: 'v3.1'})
  .request({
      "Messages": [
        {
          "From": {
            "Email": sendFrom,
            "Name": 'QuickSource.org'
          },
          "To": [
                {
                  "Email": sendTo,
                  "Name": 'QuickSource User'
                }
              ],
              "Subject": 'Research results from QuickSource',
              "TextPart": "Here's the research you selected!",
              "HTMLPart": emailHTML
        }
      ]
    })
    .catch(err => console.log('error', err))

    res.sendStatus(200)
  request
    .then((result) => {
        console.log(result.body)
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })

})

email.post('/feedback', function(req, res, next){

  const replyTo = req.body.info.email;
  const name = req.body.info.name;
  const message = req.body.info.message;

  const request = mailjet
  .post('send', {version: 'v3.1'})
  .request({
      Messages: [
        {
          From: {
            Email: sendFrom,
            Name: 'Feedback from ' + name
          },
          To: [
                {
                  Email: sendFrom,
                  Name: 'passenger 1'
                }
              ],
              Subject: 'Feedback from ' + name,
              TextPart: 'Dear passenger 1, welcome to Mailjet! May the delivery force be with you!',
              HTMLPart: '<p>' + message + '<br />' + 'reply to: ' + replyTo + '</p>'
        }
      ]
    })

  request
    .then((result) => {
        console.log(result.body)
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports = email;
