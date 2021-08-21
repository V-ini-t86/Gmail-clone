const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
require("dotenv").config();
//when this cloud function is already deployed, change the origin to 'https://your-deployed-app-url
const cors = require("cors")({ origin: true });

//create and config transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true, // true for 465, false for other ports
  auth: {
    user: "your@email",
    pass: "your_password",
  },
});

//export the cloud function called `sendEmail`
exports.sendEmail = functions.https.onRequest((req, res) => {
  //for testing purposes
  console.log(
    "from sendEmail function. The request object is:",
    JSON.stringify(req.body)
  );
  //enable CORS using the `cors` express middleware.
  cors(req, res, () => {
    //get contact form data from the req and then assigned it to variables
    const email = req.body.email;
    const name = req.body.name;
    const message = req.body.message;
    const subject = req.body.subject;

    //config the email message
    const mailOptions = {
      from: email,
      to: email,
      subject: subject,
      text: `${message}`,
    };

    //call the built in `sendMail` function and return different responses upon success and failure
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send({
          data: {
            status: 500,
            message: error.toString(),
          },
        });
      }

      return res.status(200).send({
        data: {
          status: 200,
          message: "sent",
        },
      });
    });
  });
});
