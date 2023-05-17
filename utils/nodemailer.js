const nodemailer = require('nodemailer');

exports.transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'frazzaq25@gmail.com',
    pass: 'xcrsudxhvhkaovap',
  },

});
