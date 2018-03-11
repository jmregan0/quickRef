const email = require('express').Router();
const sendFrom = process.env.userId

const publicKey = process.env.mailjetPublicKey;
const privateKey = process.env.mailjetPrivateKey;

const mailjet = require('node-mailjet').connect(publicKey, privateKey)

email.post('/', function(req, res, next){

  const sendTo = req.body.sendTo;

  const request = mailjet
  .post('send', {version: 'v3.1'})
  .request({
      "Messages": [
        {
          "From": {
            "Email": sendFrom,
            "Name": 'Mailjet Pilot'
          },
          "To": [
                {
                  "Email": sendTo,
                  "Name": 'passenger 1'
                }
              ],
              "Subject": 'Your email flight plan!',
              "TextPart": 'Dear passenger 1, welcome to Mailjet! May the delivery force be with you!',
              "HTMLPart": '<p>blah blah</p>'
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
