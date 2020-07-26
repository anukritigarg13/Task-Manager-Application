const sgMail=require("@sendgrid/mail")

sgMail.setApiKey(process.env.API)

console.log(process.env.API)
console.log(process.env.PORT)
const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:"agarg3_be17@thapar.edu",
        subject:"Thanks for joining!",
        text:`Welcome to the app, ${name}. Let us know how you get along with the app!`

    })
}

const sendGoodbyeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:"agarg3_be17@thapar.edu",
        subject:"Sorry to see you go",
        text:`We are sad to see you leave, ${name}. Let us know how we can improve the app!`

    })
}

module.exports={
    sendWelcomeEmail,
    sendGoodbyeEmail

}