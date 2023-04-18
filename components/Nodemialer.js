
// const nodemailer = require('nodemailer');



// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'myselfraheel@gmail.com',
//         pass: 'okayokayokay70755'
//     }
// });

// const sendEmail = (formData, recipientEmail) => {

//     let mailOptions = {
//         from: 'youremail@gmail.com',
//         to: recipientEmail,
//         subject: 'Node Mailer Test',
//         html: `<p><b>Name:</b> ${formData.fullname}</p>
//                <p><b>Email:</b> ${formData.email}</p>
//                <p><b>Message:</b> ${formData.phone}</p>
//                <p><b>Message:</b> ${formData.coverLetter}</p>
//                <p><b>Message:</b> ${formData.cv}</p>`
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });
// };

// export default { sendEmail };
