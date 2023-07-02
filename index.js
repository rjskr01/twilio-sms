const sid = '';
const auth_token = '';
const phone_number = '+15416973683';

const twilio = require('twilio')(sid,auth_token);

twilio.messages.create({
    from: phone_number,
    to: '+918675675972',
    body: "This is testing message from twilio by Rajasekar"
}).then(res => {
    console.log("Message has been sent!");
}).catch(err => console.log(err));