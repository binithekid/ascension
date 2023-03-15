import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function message(req, res) {
  const { email } = req.body;

  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.SEND_TO,
      subject: "Ascension Emails",
      text: `Email: ${email}`,
    });
    res.send({
      message: "Success",
    });
  } catch (error) {
    console.error(error);
  }
}
