import emailjs from 'emailjs-com';

const sendEmail = async (templateParams) => {
  templateParams.website = 'Portfolio';
  templateParams.to_name = 'Elias';

  try {
    const res = await emailjs.sendForm(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.EMAILJS_USER_ID
    );

    console.log('In try block: ', res);
  } catch (err) {
    console.log('In catch block: ', err);
  }
};

export default sendEmail;
