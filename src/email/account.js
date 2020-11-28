var DOMAIN = process.env.DOMAIN_NAME;
var mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_KEY, domain: DOMAIN});

const welcomeEmail = (email , name) => {
const data = {
  //setup the message form
  from: 'ali aboujaib LLC <syrianengineerali@gmail.com>',
  to: email,
  subject: 'Hello',
  text: `welcom ${name} to our task manager app`
};

mailgun.messages().send(data, (error, body) => {
    if (error){
        console.log(error)
    }
  console.log(body);
});
}

const cancelationEmail = (email , name) => {
    const data = {
      //setup the message form
      from: 'ali aboujaib LLC <syrianengineerali@gmail.com>',
      to: email,
      subject: 'Hello',
      text: ` ${name},we sorry for that, hope to see soon!`
    };
    
    mailgun.messages().send(data, (error, body) => {
        if (error){
            console.log(error)
        }
      console.log(body);
    });
    }
    

module.exports = {
    welcomeEmail,
    cancelationEmail
}