const email = require('express').Router();
const sendFrom = require('../../mySecrets').userId

const publicKey = require('../../keys').mailjetPublicKey;
const privateKey = require('../../keys').mailjetPrivateKey;

const mailjet = require('node-mailjet').connect(publicKey, privateKey)

email.post('/', function(req, res, next){

  const sendTo = req.body.sendTo;

  const request = mailjet
  .post('send', {version: 'v3.1'})
  .request({
      Messages: [
        {
          From: {
            Email: sendFrom,
            Name: 'Mailjet Pilot'
          },
          To: [
                {
                  Email: sendTo,
                  Name: 'passenger 1'
                }
              ],
              Subject: 'Your email flight plan!',
              TextPart: 'Dear passenger 1, welcome to Mailjet! May the delivery force be with you!',
              HTMLPart: '<h3>Dear passenger 1, welcome to Mailjet!</h3><br />May the delivery force be with you!'
        }
      ]
    })

  request
    .then((result) => {
        console.log(result.body)
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })

})

module.exports = email;
