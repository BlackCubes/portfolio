import axios from 'axios';

const sendEmailAPI = async (data) => {
  try {
    const url =
      'https://contactemailformapi.herokuapp.com/api/v1/email/sendEmail';

    const res = await axios({
      method: 'POST',
      url,
      data,
    });

    if (res.status === 200) {
      console.log('Success!');
    }
  } catch (err) {
    console.log('Error: ', err.response.data);
  }
};

export default sendEmailAPI;
