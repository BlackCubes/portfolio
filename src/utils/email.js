import emailjs from 'emailjs-com';

const sendEmail = async (templateParams) => {
  templateParams.website = 'Portfolio';
  templateParams.to_name = 'Elias';

  try {
    const res = await emailjs.sendForm(
      import.meta.env.EMAILJS_SERVICE_ID,
      import.meta.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.EMAILJS_USER_ID
    );

    console.log('In try block: ', res);
  } catch (err) {
    console.log('In catch block: ', err);
  }
};

export default sendEmail;
