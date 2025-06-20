const nodemailer=require('nodemailer');
let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'ammachar@student.tce.edu',
        pass:'duxx rlxh yuuc ihae'
    }
});
let mailOptions={
    from:'ammachar@student.tce.edu',
    to:'ammachar3010@gmail.com',
    subject:'Hello from Node.js!',
    text:'this is a test email sent using node mailer.',
};
transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        return console.log('Error:',error);
    }
    console.log('Message sent:',info.response);
});