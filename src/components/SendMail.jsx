import emailjs from '@emailjs/browser';

function SendMail({ formData }) {
    emailjs.send(
      "service_g5wtcj1","template_tit3pre",   
      {
        to_name: formData.email,
        from_name: formData.name,
        message: formData.message,
      },
      {
        publicKey :'_NEChYhqTmF5KwfCG' 
      })
    .then((result) => {
      console.log('Email sent successfully:', result.text);
    })
    .catch((error) => {
      console.log('Failed to send email:', error.text);
    });

    return (<></>)
  };



export default SendMail;
