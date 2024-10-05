import emailjs from '@emailjs/browser';

function SendMail({ formData }) {
  return emailjs.send(
    "service_g5wtcj1", "template_tit3pre",   
    {
      to_name: formData.email,
      from_name: formData.name,
      message: formData.message,
    },
    {
      publicKey :'_NEChYhqTmF5KwfCG' 
    }
  );
}

export default SendMail;
