import nodemailer  from "nodemailer";

// const smtpConfig = {
//     host: 'smtp.websupport.sk',
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: 'dev@tomaskmet.com',
//         pass: '20Mh1vv8V7SL4a%T$S'
//     }
// };

// const smtpConfig = {
//     // pool: true,
//     // service: 'Office365',
//     // service: 'Outlook365',
//     host: 'smtp.office365.com',
//     port: 587,
//     // port: 465,
//     // secure: true, // use SSL
//     // secureConnection: false,
//     secure: false, // use SSL
//     // requireTLS: true,
//     auth: {
//         user: 'reply@ovpartners.net',
//         pass: 'Ruw26346'
//     },
//     // tls: {
//     //     // ciphers:'SSLv3',
//     //     rejectUnauthorized: false,
//     // }
//     // tls: {
//     //     // do not fail on invalid certs
//     //     rejectUnauthorized: false,
//     // },
// };

const smtpConfig = {
    host: 'smtp.office365.com',
    port: 587,
    // secure: true, // use SSL
    // secure: false, // use SSL
    auth: {
        user: 'contact@ovpartners.net',
        pass: 'Olga2023'
    },
    // tls: {
    //     // ciphers:'SSLv3',
    //     rejectUnauthorized: false,
    // }
};

export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    // Create a transporter using your email service's SMTP settings
    const transporter = nodemailer.createTransport(smtpConfig)

    try {
        // Send the email to user about the contact form submission
        transporter.sendMail({
            from: smtpConfig.auth.user,
            to: body.emailAddress,
            subject: 'Thank you for contacting us',
            text: "You are very important to us, all information received will always remain confidential. We will contact you as soon as we review your message."
        })

        // Send the email to OVP about the contact form submission
        await transporter.sendMail({
            from: smtpConfig.auth.user,
            // to: body.emailAddress, // test
            to: 'contact@ovpartners.net',
            subject: `OVP contact form - ${ body.fullName || body.companyName || body.emailAddress }`,
            html: "Full Name: " + body.fullName
                + "<br/>"
                + "Company Name: " + body.companyName
                + "<br/>"
                + "Email: " + body.emailAddress
                + "<br/>"
                + "Industry: " + body.industry
                + "<br/>"
                + "Number: " + body.number
                + "<br/>"
                + "Message: " + body.message

        })
        return { message: 'Email sent successfully', success: true }

    } catch (error) {
        console.error(error)
        return { message: 'Error while sending' , error : error, success: false }
    }
})