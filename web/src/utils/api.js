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

    if (res.status === 202) {
      console.log('Success: ', res.data.message);
    }
  } catch (err) {
    console.log('Error: ', err.response.data.message);
  }
};

export default sendEmailAPI;
