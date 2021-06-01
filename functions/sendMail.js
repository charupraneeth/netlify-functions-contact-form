const { default: axios } = require("axios");
require("dotenv").config();
exports.handler = async function (event, context) {
  const body = JSON.parse(event.body);
  const {
    captchaToken,
    data: { fromName, fromEmail, fromMessage, subject },
  } = body;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${captchaToken}`;
  console.log(typeof process.env.RECAPTCHA_SECRET);
  const config = {
    Accept: "application/json",
  };

  const captchaResponse = await axios.post(url, {}, config);
  console.log(captchaResponse.data);
  // if (captchaResponse.success) {
  //   console.log("valid captacha");
  // } else {
  //   console.log("invalid captcha");
  // }

  return {
    statusCode: 200,
    body: "successful",
  };
};
